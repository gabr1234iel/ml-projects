import React, { useState } from 'react';
import DrawingCanvas from './DrawingCanvas';
import Prediction from './Prediction';

const App = () => {
    const [prediction, setPrediction] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    const handlePrediction = (predictedNumber) => {
        setPrediction(predictedNumber);
        setIsLoading(false); // Stop loading when prediction is received
    };

    const handleClear = () => {
        setPrediction('');
    };

    const handlePredictClick = () => {
        setIsLoading(true); // Start loading when predict button is clicked
        // Call the function to send the image to the server here
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <div className='w-full max-w-lg p-4 border border-gray-200 rounded shadow-lg bg-white'>
                <h1 className='text-center text-2xl font-bold mb-4'>Draw a Number</h1>
                <DrawingCanvas onPredict={handlePrediction} onClear={handleClear} onPredictClick={handlePredictClick} />
                <Prediction result={prediction} isLoading={isLoading} />
            </div>
        </div>
    );
}

export default App;
