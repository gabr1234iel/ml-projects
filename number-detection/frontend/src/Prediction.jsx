const Prediction = ({ result, isLoading }) => {
    const loadingText = isLoading ? 'Loading...' : 'Prediction: ';

    return (
        <div className="mt-4 p-2 border rounded bg-white text-black">
            <p>{loadingText}{!isLoading && result}</p>
        </div>
    );
};

export default Prediction;