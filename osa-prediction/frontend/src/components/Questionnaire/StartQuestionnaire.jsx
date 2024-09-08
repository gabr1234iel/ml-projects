import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
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


const StartQuestionnaire = () => {
  return (
  <div className="flex justify-center items-center h-screen w-screen bg-cyan-500 text-default-yellow text-5xl font-black">
      <Link to="/" className="absolute top-5 left-5 text-lg font-semibold text-default-yellow hover:text-white flex items-center">
        <IoArrowBack className="mr-2" /> Back to Home
      </Link>
      <AlertDialog>
        <AlertDialogTrigger className="text-center hover:text-white">Press to start now!</AlertDialogTrigger>
  
        <AlertDialogContent className='bg-gray-200'>
          <AlertDialogHeader>
            <AlertDialogTitle>Disclaimer alert</AlertDialogTitle>
            <AlertDialogDescription>
            Our team would like to emphasize that our prediction result is solely for informational purposes and should not be used as medical evidence or reference. We will not be held accountable for any consequences resulting from errors in the prediction result.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className='transition hover:scale-105 bg-yellow-300'><Link to="tonsil-size">OK, I understand.</Link></AlertDialogAction>
            <Link to="/"><AlertDialogCancel className='bg-red-500 text-white'>Cancel</AlertDialogCancel></Link>            
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    
  )
}

export default StartQuestionnaire