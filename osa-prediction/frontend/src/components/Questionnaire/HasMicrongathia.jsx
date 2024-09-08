import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import microngathiaImage from "../../assets/retro_micrognathia.jpeg";
import { QuestionnaireContext } from "./QuestionnaireContext";
import { motion, AnimatePresence } from "framer-motion";


const HasMicrongathia = () => {
  const navigate = useNavigate();
  const { updateFormData, formData } = useContext(QuestionnaireContext);
  const [isExiting, setIsExiting] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false); // State to manage visibility of AlertDialog
  const [completedForm, setCompletedForm] = useState(true); // State to manage form completion



  useEffect(() => {
    if(Object.values(formData).includes(null)){
      setCompletedForm(false);
    }else{
      setCompletedForm(true);
    }
  },[showAlertDialog]);

  const handleSelection = (hasMicrognathia) => {
    updateFormData({ hasMicrognathia });
    if (Object.values(formData).includes(null)) {
      setShowAlertDialog(true); // Show AlertDialog if form data is incomplete
    } else {
      setCompletedForm(true); // Set form completion to true
      goToResultPage();
    }
  };

  const goToResultPage = () => {
    setIsExiting(true);
    navigate("../result");
  };

  const handleBackClick = () => {
    navigate("../has-retrognathia");
  };

  const leftDivVariants = {
    hidden: { x: -500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
      ease: "ease out",
    },
    exit: {
      x: -500,
      opacity: 0,
      transition: { duration: 0.5 },
      ease: "easeIn",
    }, // Move out to the left
  };

  const rightDivVariants = {
    hidden: { x: 500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
      ease: "ease out",
    }, // Adding a delay
    exit: {
      x: "-66vw",
      width: "100vw", // Ensure it expands to cover the entire viewport width
      transition: { duration: 0.5 },
      ease: "easeIn",
      opacity: 1, // Keeping opacity at 1 if you want it fully visible while exiting
    },
  };
  const imageVariants = {
    hidden: {
      x: "100vw", // Start off-screen to the right
      rotate: 200,
      opacity: 0, // Start fully transparent
    },
    visible: {
      x: 0, // Move to its final position on-screen
      rotate: 0, // End rotation, making it straight
      opacity: 1, // Fully visible
      transition: {
        duration: 2, // Duration of the roll-in and opacity transition
        ease: "easeIn", // Type of easing for the motion
      },
    },
    exit: {
      opacity: 0, // Fade out
      transition: { duration: 0.5 }, // Duration of the fade-out transition
    },
  };


  return (
    <>
          {completedForm && (
              <div className="absolute h-[100vh] w-[100vw] bg-green-500 z-20 flex items-center justify-center">
              <button 
               onClick={() => goToResultPage()}
               className="bg-blue-500 text-white font-bold rounded py-1 px-2 md:py-2 md:px-8 transition duration-300 ease-in-out
               transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 text-3xl">Get prediction</button>       
              </div>
            )
            }
      {showAlertDialog && (
        <div className="absolute z-20 w-full h-full flex justify-center items-center bg-black/80">
          <div className="bg-white rounded-xl px-12 py-4 absolute h-[200px] flex flex-col justify-center items-center">
            <p className="text-xl">Please make sure you have filled in all <span className="font-bold">8</span> inputs for an accurate prediction result.</p>
            <div className="px-2 py-2 w-72 mt-4 border-black bg-yellow-300 text-center rounded-lg hover:opacity-80 transition">
              <Link to="../tonsil-size">Double check all answers.</Link>
            </div>
            <div className="px-2 py-2 w-72 mt-2 border-black bg-yellow-500 text-center rounded-lg hover:opacity-80 transition">
              <button onClick={() => setShowAlertDialog(false)}>Form already completed.</button>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence onExitComplete={() => setIsExiting(false)}>
        {!isExiting && (
          <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:h-screen items-center bg-cyan-500">
      { !completedForm && (
            <motion.div
              className="col-span-2 grid grid-row-2 items-center p-4 md:p-20 min-h-[50vh]"
              variants={leftDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            > 
            <div>
                <h1 className="text-default-yellow text-4xl md:text-8xl mb-4 md:mb-8 font-semibold">
                  Q8
                </h1>
                <div className="text-slate-300 text-2xl md:text-6xl mb-4 md:mb-8 font-semibold">
                  Do you have micrognathia?
                </div>
                <div className="text-slate-500 text-base md:text-xl mb-4 md:mb-8 font-semibold">
                  Micrognathia is a condition where the lower jaw is
                  significantly smaller than usual, potentially affecting dental
                  alignment and airway openness.
                </div>
              </div>
              <div className="space-x-4">
                <button
                    onClick={() => handleSelection(true)}
                    className="bg-default-yellow text-cyan-500 font-bold rounded py-1 px-2 md:py-2 md:px-4 transition duration-300 ease-in-out
                    transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleSelection(false)}
                    className="bg-default-yellow text-cyan-500 font-bold rounded py-1 px-2 md:py-2 md:px-4 transition duration-300 ease-in-out
                    transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50"
                  >
                    No
                  </button>
              </div>
              <button
                onClick={handleBackClick}
                className="px-2 py-2 rounded mt-11 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
              >
                Back
              </button>
              </motion.div> 
              
              
              )
            }
        
            {!completedForm && (
              <motion.div
              className="flex justify-center items-center w-full h-full bg-slate-950 min-h-[50vh]"
              variants={rightDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src={microngathiaImage}
                alt="Micrognathia"
                className="mb-8 max-w-full h-auto"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
              
            </motion.div>
            )}
            
          </div>
        )}
      </AnimatePresence>

    </>
  );
};

export default HasMicrongathia;
