
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import leftImg from "../../assets/leftImg.png";
import rightImg from "../../assets/rightImg.png";

const PredictionResult = ({ result }) => {

  const [osaStatus, severityIndex] = result;
  const [osaString, setOsaString] = useState('');
  const [severityString, setSeverityString] = useState('');

  
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



  useEffect(() => {
    if (osaStatus === 1) {
      setOsaString("Positive");
    } else {
      setOsaString("Negative");
    }

    if(osaStatus == 1){
        switch (severityIndex) {
          case 0:
            setSeverityString("Mild");
            break;
          case 1:
            setSeverityString("Moderate");
            break;
          case 2:
            setSeverityString("Severe");
            break;
        } 
      }

  }, []);
    


  return (
    <div className='py-20'>
      <p className="font-bold text-3xl lg:text-4xl ">Prediction Result:</p>
      {/* Only interpret and display the result if it exists */}
      {result && 
        // Display the interpretation
        <div className='flex flex-col gap-2 mt-20'>
          <div className={`py-4 text-3xl`}>
            You are <span className={`${osaStatus === 1 ? 'text-red-500' : 'text-green-500'} uppercase text-4xl font-bold underline`}>{osaString}</span>&nbsp;for Obstructive Sleep Apnea
          </div>
          {(osaStatus == 0) && ( <span className='text-4xl text-center font-bold text-green-500'>Congratulations!</span> )}
        </div>
       } 
       {
       osaStatus == 1 && severityIndex == 2 &&
        (
          <div className="grid grid-cols-3 py-5 font-bold">
            <div className="col-span-1 text-center bg-red-400"></div>
            <div className="col-span-1 text-center bg-red-600"></div>
            <div className="col-span-1 text-center bg-red-800">Severe</div>
          </div>
        )
        }
        {
       osaStatus == 1 && severityIndex == 1 &&
        (
          <div className="grid grid-cols-3 py-5 font-bold">
            <div className="col-span-1 text-center bg-red-400"></div>
            <div className="col-span-1 text-center bg-red-600">Moderate</div>
            <div className="col-span-1 text-center bg-red-800"></div>
            
            
          </div>
        )
        }
        {
       osaStatus == 1 && severityIndex == 0 &&
        (
          <div className="grid grid-cols-3 py-5 font-bold">
            <div className="col-span-1 text-center bg-red-400">Mild</div>
            <div className="col-span-1 text-center bg-red-600"></div>
            <div className="col-span-1 text-center bg-red-800"></div>
            
            
          </div>
        )
        }

        {osaStatus == 1 &&
          (<div className="relative grid grid-cols-1 gap-x-4 max-w-[1000px] gap-y-3 px-8 py-10 lg:mt-40 my-10 border-t-2 border-white">
            <h4 className="font-bold text-3xl">What should I do next?</h4>
            <p className="font-medium text-lg lg:text-xl">We recommend going for a <span className="font-semibold text-lg lg:text-xl text-default-blue-500">polysomnography test</span>. A polysomongraphy test is interpreteed by professionals and provides a more conclusive and comprehensive evaluation of OSA. You can visit your nearest hospital for further information.</p>
            <p className="font-bold text-3xl mt-5">Treatments</p> 
            <div className="grid grid-cols-1 py-7 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-lg lg:text-xl">
                  The most common treatment for Obstructive Sleep Apnea (OSA) is
                  <span className="font-semibold text-lg lg:text-xl text-default-blue-500">
                    {" "}
                    Continuous Positive Airway Pressure therapy
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
          </div>)
          }
    </div>
  );
};

export default PredictionResult;
