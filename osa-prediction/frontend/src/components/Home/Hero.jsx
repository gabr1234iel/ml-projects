import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import topBrain from "../../assets/topBrain.png";
import midAi from "../../assets/midAi.png";
import bottomChip from "../../assets/bottomChip.png";
import "./Hero.css"; 
import { Button } from "../ui/moving-border"; 
import svgImg from "../../assets/svg.png";
import widgetImg from "../../assets/widget.png";
import { useNavigate } from 'react-router-dom';



export default function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX); 
      setMouseY(event.clientY); 
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Programmatically navigate to the 'questionnaire' route
    navigate('/questionnaire');
  };

  

  return (
    <>
      <motion.section
        className="lg:grid lg:grid-cols-2 lg:gap-8 lg:px-20 lg:mb-32 flex flex-col my-12"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="col-start-1 col-span-1 flex flex-col gap-y-2 px-10 font-sans lg:justify-center">
          <div className="col-start-1 col-span-1 flex flex-col gap-y-2 px-10 font-sans lg:justify-center">
            <p className="font-semibold text-4xl lg:text-5xl">
              Test<br></br>
              <span className="star-effect">
                <span className="magic-text">Obstructive Sleep Apnea</span>
              </span><br></br>
              at Home
            </p>
            <hr className="my-4 border-1 border-black" />
            <p className="text-lg lg:text-xl pb-10">
              Our advanced machine learning model accurately predicts and
              diagnoses Obstructive Sleep Apnea. Get your results in minutes.
            </p>
            <Button
        borderRadius="1.75rem"
        className="bg-white text-black border-neutral-200 dark:border-slate-800 font-medium"
        onClick={handleNavigation}

      >
              TEST NOW ➜
            </Button>
          </div>
        </div>
        <div className="relative w-full h-[50vh]  hidden md:block">
          <motion.img
            src={topBrain}
            className="object-cover absolute left-[-10vw] top-[-18vh] w-[40vw] h-[40vh] z-20"
            style={{ x: mouseX / 15, y: mouseY / 15 }}
          />
          <motion.img
            src={svgImg}
            className="object-cover absolute left-[-5vw] w-full h-full z-0"
            style={{ x: mouseX / 80, y: mouseY / 80 }}
          />
          <motion.img
            src={widgetImg}
            className="object-cover absolute bottom-[-15vh] right-[0vw]  w-1/2 h-1/2 z-0"
            style={{ x: mouseX / 100, y: mouseY / 100 }}
          />
          <motion.img
            src={midAi}
            className="object-cover absolute w-full h-full z-10"
            style={{ x: mouseX / 80, y: mouseY / 80 }}
          />
          <motion.img
            src={bottomChip}
            className="object-cover absolute left-[-5vw] bottom-[-8vh] w-[35vw] h-[30vh] z-20"
            style={{ x: mouseX / 25, y: mouseY / 25 }}
          />
        </div>
      </motion.section>
    </>
  );
}