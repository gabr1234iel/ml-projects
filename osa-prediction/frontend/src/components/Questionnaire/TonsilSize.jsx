import React, { useContext, useState } from "react";
import tonsilGrade from "../../assets/tonsilgrade.png";
import { useNavigate } from "react-router-dom";
import { QuestionnaireContext } from "./QuestionnaireContext";
import { motion, AnimatePresence } from "framer-motion";


const TonsilSize = () => {
  const navigate = useNavigate();
  const { updateFormData } = useContext(QuestionnaireContext);
  const { formData } = useContext(QuestionnaireContext);
  const tonsilSizes = [0, 1, 2, 3, 4];

  const [isExiting, setIsExiting] = useState(false);

  const handleTonsilSizeClick = (size) => {
    setIsExiting(true);
    updateFormData({ tonsilSize: size });

    setTimeout(() => {
      navigate("../mallampati-score");
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
    },
  };

  const rightDivVariants = {
    hidden: { x: 500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
      ease: "ease out",
    },
    exit: {
      x: "-66vw",
      width: "100vw",
      transition: { duration: 0.5 },
      ease: "easeIn",
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: {
      x: "100vw",
      rotate: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeIn",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <AnimatePresence onExitComplete={() => setIsExiting(false)}>
        {!isExiting && (
          <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:h-screen items-center bg-cyan-500">
            <motion.div
              className="col-span-2 grid grid-row-2 items-center p-4 md:p-20 min-h-[50vh]"
              variants={leftDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div>
                <h1 className="text-default-yellow text-4xl md:text-8xl mb-4 md:mb-8 font-semibold">
                  Q1
                </h1>
                <div className="text-slate-300 text-2xl md:text-6xl mb-4 md:mb-8 font-semibold">
                  What is the size of your tonsils?
                </div>
                <div className="text-slate-500 text-base md:text-xl mb-4 md:mb-8 font-semibold">
                  Tonsil size is a key factor in diagnosing Obstructive Sleep
                  Apnea (OSA), as larger tonsils may obstruct the airway during
                  sleep. Here's a simple guide to assess your tonsil size:
                  <ul>
                    <li>
                      <strong>1:</strong> Tonsils are hidden within the tonsil
                      pillars.
                    </li>
                    <li>
                      <strong>2:</strong> Tonsils extend to the edges of the
                      tonsil pillars.
                    </li>
                    <li>
                      <strong>3:</strong> Tonsils extend beyond the tonsil
                      pillars.
                    </li>
                    <li>
                      <strong>4:</strong> Tonsils are very large and almost
                      completely block the airway.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap justify-start space-x-2 md:space-x-4">
                {tonsilSizes.map((size) => (
                  <button
                  key={size}
                  className={`bg-default-yellow text-cyan-500 font-bold rounded py-1 px-2 md:py-2 md:px-4 transition duration-300 ease-in-out
                  transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50 ${size === formData.tonsilSize ? 'border-black border-4' : ''}`}
                  onClick={() => handleTonsilSizeClick(size)}
                >
                  {size}
                </button>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center items-center w-full h-full bg-slate-950 min-h-[50vh]"
              variants={rightDivVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src={tonsilGrade}
                alt="tonsil sizes"
                className="mb-8 max-w-full h-auto rounded"
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

export default TonsilSize;
