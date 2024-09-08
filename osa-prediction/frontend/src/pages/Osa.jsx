import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import osaImg from "../assets/osa_man.png";
import snoreImg from "../assets/snore.png";
import sleepImg from "../assets/sleep.png";
import concentrateImg from "../assets/concentrate.png";
import moodImg from "../assets/moodSwing.png";
import polyImg from "../assets/polysomnography.png";
import moneyImg from "../assets/money.png";
import timeImg from "../assets/time.png";
import React, { useState, useEffect } from "react";
import leftImg from "../assets/leftImg.png";
import rightImg from "../assets/rightImg.png";
import MalaysiaMap from "./MalaysiaMap";

const Osa = () => {
  console.log(import.meta.env);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX); // Horizontal position of the mouse
      setMouseY(event.clientY); // Vertical position of the mouse
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const floatVariants = {
    float: {
      y: ["0%", "2%", "0%"],
      transition: {
        duration: 2,
        times: [0, 0.5, 1],
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex justify-center items-center relative">
          {" "}
          <div className="items-center pr-20 z-10">
            {" "}
            <p className="pl-5 font-bold text-5xl lg:text-6xl text-default-blue-700">
              About <br></br>
              <span className="text-default-blue-500">O</span>bstructive{" "}
              <span className="text-default-blue-500">S</span>leep{" "}
              <span className="text-default-blue-500">A</span>pnea
            </p>
          </div>
          <div className="z-20 hidden md:block">
            <img src={osaImg} alt="Osa" className="rounded-lg -mb-40 ml-12" />
          </div>
        </div>
        <div className="relative grid grid-cols-1 mt-5 gap-y-10 md:gap-y-20 lg:gap-y-72 px-8 sm:px-16 md:px-24 lg:px-32 py-10 md:py-20 bg-gray-100 rounded-2xl">
          <div>
            <p className="font-bold text-3xl lg:text-4xl  ">What is OSA?</p>
            <hr className="my-8 border-1 border-black w-full" />
            <div className="grid grid-cols-1 py-7 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <p className="font-medium text-lg lg:text-xl">
                Obstructive sleep apnea (OSA) is a sleep-related breathing
                disorder that involves a decrease or complete halt in airflow
                despite an ongoing effort to breathe. It occurs when the muscles
                relax during sleep, causing soft tissue in the back of the
                throat to collapse and block the upper airway. This leads to
                partial reductions (hypopneas) and complete pauses (apneas) in
                breathing that last at least 10 seconds during sleep. Most
                pauses last between 10 and 30 seconds, but some may persist for
                one minute or longer.
              </p>
              <p className="font-medium text-lg lg:text-xl ">
                The brain responds to the lack of oxygen by alerting the body,
                causing a brief arousal from sleep that restores normal
                breathing. This pattern can occur hundreds of times in one
                night. The result is a fragmented quality of sleep that often
                produces an excessive level of daytime sleepiness. Most people
                with OSA snore loudly and frequently, with periods of silence
                when airflow is reduced or blocked. They then make choking,
                snorting or gasping sounds when their airway reopens.
              </p>
            </div>
            <hr className="my-8 border-1 border-black w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <div className="grid grid-cols-2 gap-4 items-center">
                <img src={snoreImg} alt="Osa" />{" "}
                <div>
                  <p className="font-semibold text-xl lg:text-2xl pb-2 text-default-blue-500">
                    Snoring
                  </p>
                  <p className="font-medium text-base lg:text-lg ">
                    Loud snoring, especially with pauses in breathing
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <img src={concentrateImg} alt="Difficulty Concentrating" />{" "}
                <div>
                  <p className="font-semibold text-xl lg:text-2xl pb-2 text-default-blue-500 ">
                    Difficulty Concentrating
                  </p>
                  <p className="font-medium text-base lg:text-lg ">
                    Falling asleep at work or even when driving.{" "}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <img src={moodImg} alt="Mood Swing" />{" "}
                <div>
                  <p className="font-semibold text-xl lg:text-2xl pb-2 text-default-blue-500">
                    Mood Swings
                  </p>
                  <p className="font-medium text-base lg:text-lg ">
                    Mood changes , such as depression or irritability{" "}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <img src={sleepImg} alt="DayTime Sleepiness" />{" "}
                <div>
                  <p className="font-semibold text-xl lg:text-2xl pb-2 text-default-blue-500">
                    Excessive Daytime Sleepiness
                  </p>
                  <p className="font-medium text-base lg:text-lg ">
                    Overwhelming sense of tiredness or drowsiness during the day
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-1  gap-y-3 px-8 sm:px-16 md:px-24 lg:px-32 py-10 md:py-20">
          <div>
            <p className="font-semibold text-3xl lg:text-4xl ">Diagnosis</p>
            <hr className="my-8 border-1 border-black w-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col ">
              <p className="font-bold text-4xl lg:text-5xl tracking-wide text-default-blue-700">
                The Hidden Challenges, of Clinical Sleep Studies
              </p>
              <div className="relative w-[500px] h-[500px] hidden md:block">
                <motion.img
                  src={timeImg}
                  className="object-cover absolute right-[-120px] top-[-230px] w-full h-full z-20"
                  style={{ x: mouseX / 15, y: mouseY / 15 }}
                />
                <motion.img
                  src={polyImg}
                  className="object-cover absolute w-full h-full z-10"
                  style={{ x: mouseX / 80, y: mouseY / 80 }}
                />
                <motion.img
                  src={moneyImg}
                  className="object-cover absolute left-[-230px] bottom-[-150px] w-full h-full z-20"
                  style={{ x: mouseX / 25, y: mouseY / 25 }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-10">
              <div className="flex gap-2 items-start w-full">
                <div className="w-16 lg:w-20 flex items-center justify-end">
                  <p className="font-mono font-medium text-7xl lg:text-8xl">
                    1
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-xl lg:text-2xl pb-2 text-default-blue-500">
                    Wait Time
                  </p>
                  <p className="font-medium text-base lg:text-lg ">
                    Long wait times to schedule a sleep study.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center w-full">
                <div className="w-16 lg:w-20 flex justify-end items-center">
                  <p className="font-mono font-medium text-7xl lg:text-8xl">
                    2
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-xl lg:text-2xl pb-2 text-default-blue-500">
                    High Cost
                  </p>
                  <p className="font-medium text-base lg:text-lg ">
                    The cost might not be fully covered by insurance.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center w-full">
                <div className="w-16 lg:w-20 flex justify-end items-center">
                  <p className="font-mono font-medium text-7xl lg:text-8xl">
                    3
                  </p>
                </div>
                <div className="max-w-[430px]">
                  <p className="font-semibold text-xl lg:text-2xl pb-2 text-default-blue-500">
                    Inconvinience and Discomfort
                  </p>
                  <p className="font-medium text-base lg:text-lg ">
                    Patients must spend the night in a sleep center, which can
                    be inconvenient.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center w-full">
                <div className="w-16 lg:w-20 flex justify-end items-center">
                  <p className="font-mono font-medium text-7xl lg:text-8xl">
                    4
                  </p>
                </div>
                <div className="max-w-[430px]">
                  <p className="font-semibold text-xl lg:text-2xl pb-2 text-default-blue-500">
                    Accessibility
                  </p>
                  <p className="font-medium text-base lg:text-lg ">
                    Not everyone has easy access to a sleep study center,
                    especially individuals living in rural or underserved areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-1  gap-y-3 px-8 sm:px-16 md:px-24 lg:px-32 py-10 md:py-20">
          <p className="font-bold text-3xl lg:text-4xl ">Treatments</p>
          <hr className="my-8 border-1 border-black w-full" />
          <div className="grid grid-cols-1 py-7 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-lg lg:text-xl">
                The most common treatment for Obstructive Sleep Apnea (OSA) is
                <span className="font-semibold text-lg lg:text-xl text-default-blue-500">
                  {" "}
                  Continuous Positive Airway Pressure (CPAP) therapy
                </span>
                . CPAP devices maintain an open airway during sleep by providing
                a steady stream of air through a mask, effectively preventing
                breathing interruptions.
              </p>
              <motion.div variants={floatVariants} animate="float">
                <img
                  src={leftImg}
                  alt="CPAP Machine"
                  className="w-full h-auto lg:scale-150 -translate-x-14"
                />
              </motion.div>
            </div>
            <div>
              <p className="font-medium text-lg lg:text-xl ">
                <span className="font-semibold text-lg lg:text-xl text-default-blue-500 ">
                  Oral appliances
                </span>{" "}
                like mandibular advancement devices can also be effective for
                OSA, adjusting the jaw to keep the airway open.
                <span className="font-semibold text-lg lg:text-xl text-default-blue-500">
                  Lifestyle changes
                </span>{" "}
                —such as weight loss, regular exercise, and avoiding smoking and
                alcohol—are key in managing the condition. If these measures
                don't suffice, surgical options like{" "}
                <span className="font-semibold text-lg lg:text-xl text-default-blue-500">
                  Uvulopalatopharyngoplasty (UPPP) or Maxillomandibular
                  Advancement (MMA){" "}
                </span>
                are considered to address the physical obstructions causing OSA.
              </p>
              <motion.div variants={floatVariants} animate="float">
                <img
                  src={rightImg}
                  alt="3images"
                  className="w-full h-auto lg:scale-125 translate-y-14"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-1  gap-y-3 px-8 sm:px-16 md:px-24 lg:px-32 py-10 md:py-24">
          <p className="font-bold text-4xl lg:text-5xl  text-default-blue-700">
              Join Our Awareness Campaign!
              </p>
              <p className="font-medium text-lg lg:text-xl pb-2">
              Help us raise awareness about Obstructive Sleep Apnea in Malaysia. If you are a positive OSA patient, please share your details below. Your participation will contribute to a better understanding and support for all affected individuals.
                  </p>
        <MalaysiaMap></MalaysiaMap>
        </div>
      </div>
    </>
  );
};

export default Osa;
