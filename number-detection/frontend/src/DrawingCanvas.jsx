import React, { useRef, useState, useEffect } from 'react';

const DrawingCanvas = ({ onClear, onPredict, onPredictClick }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.lineWidth = 15;
        ctx.strokeStyle = 'white';
        ctx.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const endDrawing = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.closePath();
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (onClear) onClear();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const parentWidth = canvas.parentElement.offsetWidth;
        const parentHeight = canvas.parentElement.offsetHeight;
        const size = Math.min(parentWidth - 36, parentHeight - 36);
        canvas.width = size;
        canvas.height = size;
        clearCanvas();
    }, []);

    const getCanvasBlob = () => {
        return new Promise((resolve) => {
            const canvas = canvasRef.current;
            canvas.toBlob(resolve, 'image/png');
        });
    };

    const sendImageToServer = async () => {
        onPredictClick();
        const blob = await getCanvasBlob();
        const formData = new FormData();
        formData.append('image', blob);

        try {
            const response = await fetch('http://localhost:5001/predict', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            onPredict(data.prediction);  // Call the callback with the prediction result
        } catch (error) {
            console.error('Error sending image to server:', error);
        }
    };

    
    
    

    return (
        <>
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseOut={endDrawing}
                onMouseMove={draw}
                className="border-2 border-gray-300"
            />
            <button onClick={clearCanvas} className="mt-2 px-4 py-2 border rounded bg-red-500 text-white hover:bg-red-400">Erase Drawing</button>
            <button onClick={sendImageToServer} className="mt-2 ml-2 px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-400">Predict Number</button>

        </>
    );
};

export default DrawingCanvas;
