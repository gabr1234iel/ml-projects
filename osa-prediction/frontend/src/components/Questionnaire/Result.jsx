import React, { useContext, useState, useEffect } from "react";
import { QuestionnaireContext } from "./QuestionnaireContext";
import PredictionResult from "./PredictionResult";
import { Link } from "react-router-dom";
import { LampContainer } from "../ui/lamp";
import { motion, AnimatePresence } from "framer-motion";

const Result = () => {
  const { formData } = useContext(QuestionnaireContext);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const getPrediction = async () => {
      localStorage.clear(); 
      setLoading(true);
      setError("");
      console.log('Form Data:', formData);  // Log the formData to the console

      try {
        const response = await fetch("/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorDetail = await response.text();  // or response.json() if the server sends JSON
          throw new Error(`HTTP error! status: ${response.status}, Detail: ${errorDetail}`);        }

        const result = await response.json();
        setPrediction(result);
        console.log(result);
      } catch (error) {
        console.error("Error during prediction:", error);
        setError("Failed to get prediction.");
      }
      setLoading(false);
    };

    getPrediction();
  }, [formData]);

  const formatValue = (value) => {
    return value !== null && value !== undefined ? value.toString() : "N/A";
  };
  const formatKey = (key) => {
    switch (key) {
      case "isNeckCircumferenceLargerThan40":
        return "Neck Circumference > 40";
      case "MP":
        return "MallampatiScore";
      
      default:
        return key.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
  };

  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          View Your Results <br /> <span className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-8xl font-medium tracking-tight text-transparent md:text-9xl">↓</span>
        </motion.h1>
      </LampContainer>
      
      <div className="flex flex-col items-center justify-center w-screen bg-slate-950 text-slate-300 pb-12">
      <h2 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl">
          User Inputs:
        </h2>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
            {Object.entries(formData).map(([key, value], idx) => (
              <div
                key={key}
                className="relative group  block p-2 h-full w-full "
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
                  <div className="relative z-50">
                    <div className="p-4">
                      <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                        {formatKey(key)}
                      </h4>
                      <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                        {formatValue(value)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {loading && <p className="text-xl mt-8">Loading prediction...</p>}
        {!loading && error && (
          <p className="text-4xl my-16 font-bold text-red-500 shadow-lg">{error}</p>
        )}
        {!loading && prediction && (
          <PredictionResult result={prediction} className="mt-8" />
        )}

        <Link
          to="/"
          className="bg-slate-300 text-slate-950 font-bold rounded py-2 my-4 px-4 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50 mt-8"
        >
          Back to home
        </Link>
      </div>
    </>
  );
};

export default Result;
