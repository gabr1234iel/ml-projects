import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import mallapatiScore from "../../assets/mp.png";
import { QuestionnaireContext } from "./QuestionnaireContext";

const MallampatiScore = () => {
  const navigate = useNavigate();
  const { updateFormData } = useContext(QuestionnaireContext);
  const { formData } = useContext(QuestionnaireContext);
  const MPScores = [1, 2, 3, 4];
  const [isExiting, setIsExiting] = useState(false);

  const handleMPScoreClick = (score) => {

    setIsExiting(true);
    updateFormData({ MP: score });

    setTimeout(() => {
      navigate("../neck-circumference");
    }, 500);
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
    navigate("../tonsil-size");
  };


  // Component JSX
  return (
    <>
      <AnimatePresence onExitComplete={() => setIsExiting(false)}>
        {!isExiting && (
          <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:h-screen items-center bg-slate-950">
            <motion.div
              className="flex justify-center items-center w-full h-full bg-cyan-500 p-4 "
              variants={leftDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src={mallapatiScore}
                alt="Mallampati Score"
                className="max-w-full h-auto rounded"
                style={{ maxHeight: "50vh" }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </motion.div>
            <motion.div
              className="col-span-2 grid grid-row-2 items-center p-4 md:p-20 "
              variants={rightDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Text and buttons */}
              <div>
                <h1 className="text-default-yellow text-4xl md:text-8xl mb-4 md:mb-8 font-semibold">
                  Q2
                </h1>
                <div className="text-slate-300 text-2xl md:text-6xl mb-4 md:mb-8 font-semibold">
                  What is your Mallampati Score?
                </div>
                <div className="text-slate-500 text-base md:text-xl mb-4 md:mb-8 font-semibold">
                  <div className="text-slate-500 text-xl mb-8 font-semibold">
                    The Mallampati score helps in assessing the risk of
                    obstructive sleep apnea (OSA) by examining the visibility of
                    structures in the back of your throat. Here’s what each
                    class means:
                    <ul className="hidden md:block text-slate-300">
                      <li>
                        <strong>Class I:</strong> Full visibility of the
                        tonsils, uvula, and soft palate.
                      </li>
                      <li>
                        <strong>Class II:</strong> The uvula and soft palate are
                        visible, but the tonsils are partially hidden.
                      </li>
                      <li>
                        <strong>Class III:</strong> Only the soft palate and
                        base of the uvula are visible.
                      </li>
                      <li>
                        <strong>Class IV:</strong> The soft palate is not
                        visible at all.
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
                {MPScores.map((score) => (
                  <button
                    key={score}
                    className={`bg-default-yellow text-black font-bold rounded py-1 px-2 md:py-2 md:px-4 transition duration-300 ease-in-out
                  transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50 ${score === formData.MP ? 'border-cyan-400 border-4' : ''}`}
                    onClick={() => handleMPScoreClick(score)}
                  >
                    {score}
                  </button>
                ))}
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

export default MallampatiScore;
