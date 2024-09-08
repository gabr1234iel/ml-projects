import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionnaireContext } from './QuestionnaireContext';
import { FaCircleInfo } from "react-icons/fa6";
import {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
  } from '../ui/alertdialog';

const ESSForm = () => {

    const navigate = useNavigate();
    const { updateFormData } = useContext(QuestionnaireContext);
    const {formData} = useContext(QuestionnaireContext);
    const [essScores, setEssScores] = useState(() => {
        const savedScores = localStorage.getItem('scores');
        return savedScores ? JSON.parse(savedScores) : {
            reading: 0,
            tv: 0,
            sittingInactive: 0,
            passenger: 0,
            lyingDown: 0,
            talkingToSomeone: 0,
            afterLunch: 0,
            inTraffic: 0
        };
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newValue = Math.min(3, Math.max(0, parseInt(value, 10) || 0)); // Adding || 0 to handle NaN
        const newScores = { ...essScores, [name]: newValue };
        setEssScores(newScores);
        localStorage.setItem('scores', JSON.stringify(newScores));
    };
    

    const handleSubmit = () => {
        setEssScores({ ...essScores});
        const totalScore = Object.values(essScores).reduce((acc, curr) => acc + curr, 0);
        updateFormData({ ESS: totalScore });
        localStorage.setItem('scores', JSON.stringify(essScores));
        navigate('../bmi');
    };
    const handleBackClick = () => {
        navigate("../neck-circumference");
      };

    const situations = [
        { name: 'reading', label: 'Sitting and reading' },
        { name: 'tv', label: 'Watching TV' },
        { name: 'sittingInactive', label: 'Sitting inactive in a public place (e.g., a theater or a meeting)' },
        { name: 'passenger', label: 'As a passenger in a car for an hour without a break' },
        { name: 'lyingDown', label: 'Lying down to rest in the afternoon when circumstances permit' },
        { name: 'talkingToSomeone', label: 'Sitting and talking to someone' },
        { name: 'afterLunch', label: 'Sitting quietly after a lunch without alcohol' },
        { name: 'inTraffic', label: 'In a car, while stopped for a few minutes in traffic' }
    ];

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-300 p-4 lg:pt-24'>
            <div className="w-full max-w-md px-4 py-8 mx-auto">
                <p className='text-3xl lg:text-4xl mb-6 text-center font-semibold'>The Epworth Sleepiness Scale</p>
                <p className='mb-4 text-center text-sm lg:text-base'>How likely are you to doze off or fall asleep in the following situations? (0-3)</p>
                <ul className='mb-6 text-center text-sm lg:text-base'>
                <AlertDialog>
                    <AlertDialogTrigger className="text-center hover:text-white underline flex items-center justify-center gap-2 w-full text-xl"><FaCircleInfo/>More information</AlertDialogTrigger>
                    <AlertDialogContent className='bg-gray-100'>
                        <AlertDialogHeader>
                            <AlertDialogTitle className='font-bold text-xl'>How sleepy are you?</AlertDialogTitle>
                            <AlertDialogDescription>
                                <p>How likely are your to doze off or fall asleep in the following situations? You should rate your chances of dozing off, not just feeling tired. Even if you have not done some of these things, try to determine how they would have affected you. For each situation, whether you would or would not have:</p><br />
                                <ul className='text-base font-semibold'>
                                    <li className='flex w-2/3 justify-between'><span>No chance of dozing</span><span>0</span></li>
                                    <li className='flex w-2/3 justify-between'><span>Slight chance of dozing</span><span>1</span></li>
                                    <li className='flex w-2/3 justify-between'><span>Moderate chance of dozing</span><span>2</span></li>
                                    <li className='flex w-2/3 justify-between'><span>High chance of dozing</span><span>3</span></li>
                                </ul>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>OK</AlertDialogCancel>          
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                    {/* Scoring indications */}
                </ul>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {situations.map(situation => (
                        <div key={situation.name}>
                            <label htmlFor={situation.name} className="block mb-2 text-sm lg:text-base">{situation.label}</label>
                            <input
                                className="w-16 md:w-24 bg-cyan-500 text-slate-950 rounded px-3 py-2"
                                type="number"
                                id={situation.name}
                                name={situation.name}
                                min={0}
                                max={3}
                                value={essScores[situation.name]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <div className='text-center my-4'>
                        <p className='font-bold text-lg lg:text-xl'>Total score: {Object.values(essScores).reduce((acc, curr) => acc + curr, 0)}</p>
                    </div>
                    <button type="submit" className="w-full bg-slate-300 text-slate-950 font-bold rounded py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50">
                        Next
                    </button>
                    
                </form>
                <button onClick={handleBackClick}
                        className="w-full bg-slate-300 text-slate-950 font-bold rounded py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50 mt-6">
                    Back
                </button>
            </div>
        </div>
    );
};

export default ESSForm;
