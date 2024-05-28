const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const { exec } = require('child_process');

const app = express();
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { spawn } = require('child_process');

app.post('/predict', upload.single('image'), async (req, res) => {
    try {
        const image = await Jimp.read(req.file.buffer);
        await image.grayscale().resize(28, 28);

        const scriptPath = path.join(__dirname, 'script/script.py');
        const modelPath = path.join(__dirname, 'models/mnist_cnn.pth');

        const pythonProcess = spawn('python', [scriptPath, modelPath]);

        image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            if (err) {
                return res.status(500).send('Error processing image');
            }
            pythonProcess.stdin.write(buffer);
            pythonProcess.stdin.end();
        });

        let prediction = '';
        pythonProcess.stdout.on('data', (data) => {
            prediction += data.toString();
        });

        pythonProcess.on('close', () => {
            res.json({ prediction: prediction.trim() });
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send('Error processing request');
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
