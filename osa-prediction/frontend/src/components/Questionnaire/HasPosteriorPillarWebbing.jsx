import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import posteriorPillarNormal from "../../assets/posteriorpillarnormal.png";
import posteriorPillarWebbing from "../../assets/posteriorpillarwebbing.png";
import { QuestionnaireContext } from "./QuestionnaireContext";
import { motion, AnimatePresence } from "framer-motion";

const HasPosteriorPillarWebbing = () => {
  const navigate = useNavigate();
  const { updateFormData, formData  } = useContext(QuestionnaireContext);
  const [isExiting, setIsExiting] = useState(false);

  const handleSelection = (hasWebbing) => {
    setIsExiting(true); // Trigger exit animation
    updateFormData({ hasPosteriorPillarWebbing: hasWebbing });
    setTimeout(() => {
      navigate("../has-retrognathia");
    }, 500);
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
  const handleBackClick = () => {
    navigate("../bmi");
  };

  return (
    <>
      <AnimatePresence onExitComplete={() => setIsExiting(false)}>
        {!isExiting && (
          <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:h-screen items-center bg-cyan-500">
            <motion.div
              className="col-span-2 grid grid-row-2 items-center p-4 md:p-20 min-h-[50vh]  "
              variants={leftDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div>
                <h1 className="text-default-yellow text-4xl md:text-8xl mb-4 md:mb-8 font-semibold">
                  Q6
                </h1>
                <div className="text-slate-300 text-2xl md:text-6xl mb-4 md:mb-8 font-semibold">
                  Do you exhibit posterior pillar webbing?
                </div>
                <div className="text-slate-500 text-base md:text-xl mb-4 md:mb-8 font-semibold">
                  Posterior pillar webbing refers to the presence of web-like
                  tissue formations between the palatopharyngeal arches
                  (posterior pillars) in the throat, which can affect airway
                  patency. It is a physical characteristic that may be
                  considered when evaluating for Obstructive Sleep Apnea (OSA)
                  or other related airway management conditions.{" "}
                </div>
              </div>
              <div className="flex flex-wrap justify-start space-x-2 md:space-x-4">
                <button
                  onClick={() => handleSelection(true)}
                  className={`bg-default-yellow text-cyan-500 font-bold rounded py-1 px-2 md:py-2 md:px-4 transition duration-300 ease-in-out
                    transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50 ${"true" === String(formData.hasPosteriorPillarWebbing)  ? 'border-black border-4' : ''} `}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleSelection(false)}
                  className={`bg-default-yellow text-cyan-500 font-bold rounded py-1 px-2 md:py-2 md:px-4 transition duration-300 ease-in-out
                    transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50 ${"false" === String(formData.hasPosteriorPillarWebbing)  ? 'border-black border-4' : ''}`}
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
            <motion.div
              className="flex justify-center items-center w-full h-full  bg-slate-950 min-h-[50vh] "
              variants={rightDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {" "}
              <motion.img
                src={posteriorPillarNormal}
                alt="Normal Posterior Pillar"
                className="w-1/2 max-w-md h-auto"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
              <motion.img
                src={posteriorPillarWebbing}
                alt="Posterior Pillar Webbing"
                className="w-1/2 max-w-md h-auto"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HasPosteriorPillarWebbing;
