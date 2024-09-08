import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import diabetes from "../../assets/diabetes.png";
import { QuestionnaireContext } from "./QuestionnaireContext";

const HasDiabetes = () => {
  const navigate = useNavigate();
  const { updateFormData } = useContext(QuestionnaireContext);
  const [isExiting, setIsExiting] = useState(false);

  const handleSelection = (hasDiabetes) => {
    setIsExiting(true);
    updateFormData({ hasDiabetes });
    setTimeout(() => {
      navigate("../sex");
    }, 500); // Adjust based on exit animation duration
  };
  const rightDivVariants = {
    hidden: { x: 500, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 }, ease: "easeOut" },
    exit: {
      x: "100vw",
      transition: { duration: 0.5 },
      ease: "easeIn",
      opacity: 0,
    }, // Adjust for smooth exit to the right
  };

  const leftDivVariants = {
    hidden: { x: -500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
      ease: "easeOut",
    },
    exit: {
      x: 0, // Start moving to the right; '0vw' keeps it starting from its original position
      width: "100vw", // Ensure it expands to cover the entire viewport width
      transition: { duration: 0.5 },
      ease: "easeIn",
      opacity: 1, // Keeping opacity at 1 if you want it fully visible while exiting
    },
  };
  const imageVariants = {
    hidden: {
      x: "-100vw", // Start off-screen to the right
      rotate: -200,
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
  const handleBackClick = () => {
    navigate("../has-micronagthia");
  };


  return (
    <>
      <AnimatePresence onExitComplete={() => setIsExiting(false)}>
        {!isExiting && (
          <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:h-screen items-center bg-slate-950">
          <motion.div
              className="flex justify-center items-center w-full min-h-[50vh] sm:h-full bg-cyan-500 p-4 md:p-20"
              variants={leftDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {" "}
              <motion.img
                src={diabetes}
                alt="diabetes"
                className="mb-8 max-w-full h-auto rounded"
                style={{ maxHeight: "40vh" }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </motion.div>
            <motion.div
              className="col-span-2 grid grid-row-2 items-center p-4 md:p-20 space-y-4 min-h-[50vh]"
              variants={rightDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {" "}
              <div>
              <h1 className="text-default-yellow text-3xl md:text-8xl mb-4 md:mb-8 font-semibold">
                  Q9
                </h1>
                <div className="text-slate-300 text-lg md:text-6xl mb-4 md:mb-8">
                  Do you have Diabetes Mellitus?
                </div>
                <div className="text-slate-500 text-sm md:text-xl">
                Diabetes is a chronic, metabolic disease characterized by elevated levels of blood glucose (or blood sugar), which leads over time to serious damage to the heart, blood vessels, eyes, kidneys and nerves. The most common is type 2 diabetes, usually in adults, which occurs when the body becomes resistant to insulin or doesn't make enough insulin.
                </div>
              </div>
              <div className="space-x-4">
                <button
                  onClick={() => handleSelection(true)}
                  className="bg-default-yellow text-slate-950 font-bold rounded py-2 px-4 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleSelection(false)}
                  className="bg-default-yellow text-slate-950 font-bold rounded py-2 px-4 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50"
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
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HasDiabetes;
