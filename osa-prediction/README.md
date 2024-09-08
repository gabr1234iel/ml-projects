# deployment-segp

## How to Run

### Prerequisites
Make sure you have the following installed on your system:

1. **Python 3 and pip3**: You can download Python 3 from [python.org](https://www.python.org/downloads/). Once installed, pip3 should be available as well.
   
   Check Python 3 installation:
    ```
    python3 --version
    pip3 --version
    ```


2. **Node.js and npm**: We recommend using Node Version Manager (nvm) to manage Node.js installations. You can install nvm by following the instructions at [github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm#installing-and-updating). Once nvm is installed, you can install the latest version of Node.js by running:

```
nvm install node
```

### Running the Project

1. **Clone the Repository**:


2. **Navigate to the Frontend Folder**:
```
cd frontend
```

3. **Install Frontend Dependencies**:

```
npm install
```

Wait for the installation of dependencies to complete.

4. **Navigate to the Root Folder**:

```
cd ..
```

5. **Navigate to the Backend Folder**:

```
cd backend
```

6. **Install Backend Dependencies**:

```
npm install
```

7. **Install Python Dependencies**:

If you have pip3, run:
```
   cd scripts
   pip3 install -r requirements.txt
```

If you have pip, run:

```
pip install -r requirements.txt
```

if you have python3, u will have to modify server.js:

```   
     const pythonProcess = spawn('python', ['scripts/userInput.py', JSON.stringify(req.body)]);
      // replace 'python' with 'python3' if using python3, vice versa
```


8. **Running the Servers**:

- **Frontend Server**:
  ```
  //change directory to frontend folder as working directory,
  npm run dev
  ```

- **Backend Server**:
  ```
  //change directory to backend folder as working directory,
  node server.js
  ```

10. **Accessing the Application**:

 Once both servers are running, you can access the application in your web browser:

 - Frontend: [http://localhost:5173](http://localhost:5173)
 - Backend: [http://localhost:5001](http://localhost:5001)

### Stopping the Servers

To stop the servers, you can use the following keyboard shortcut:

- **Windows**: Ctrl + C
- **macOS/Linux**: Ctrl + C

## License

This project is licensed under the [MIT License](LICENSE).

