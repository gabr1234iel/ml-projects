import React, { useState, useEffect, useRef } from "react";
import drImg from "../assets/doctor.png";
import patientImg from "../assets/patient.png";
import startImg from "../assets/start.png";
import submitImg from "../assets/submit.png";
import completeImg from "../assets/complete.png";
import bar1Img from "../assets/bar1.png";
import bar2Img from "../assets/bar2.png";

const About = () => {
  const pathRef = useRef(null);
  const secondPathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [secondPathLength, setSecondPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      pathRef.current.style.strokeDasharray = length.toString();
      pathRef.current.style.strokeDashoffset = length.toString();
    }

    if (secondPathRef.current) {
      const length = secondPathRef.current.getTotalLength();
      setSecondPathLength(length);
      secondPathRef.current.style.strokeDasharray = length.toString();
      secondPathRef.current.style.strokeDashoffset = length.toString();
    }

    const handleScroll = () => {
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      if (pathRef.current) {
        const drawLength = pathLength * scrollPercentage * 2.5;
        pathRef.current.style.strokeDashoffset = (
          pathLength - drawLength
        ).toString();
      }

      if (secondPathRef.current) {
        const drawLength = secondPathLength * scrollPercentage * 4.5;
        secondPathRef.current.style.strokeDashoffset = (
          secondPathLength - drawLength
        ).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength, secondPathLength]);

  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 lg:gap-y-72 px-8 sm:px-16 md:px-24 lg:px-32 py-10 md:py-20  bg-gray-100" style={{ zIndex: 1 }}>
          <svg
            viewBox="0 0 1087 1671"
            fill="none"
            style={{
              position: "absolute",
              width: "73%",
              height: "94%",
              zIndex: "0",
              top: "0",
              right: "0", 
            }}
          >
            <g filter="url(#filter0_d_2_11)">
              <path
                ref={pathRef}
                d="M1082 1L901.5 810.5C823.981 994.965 780.519 956.234 703 810.5L610.5 644C542.733 534.901 500.642 543.254 420.5 644L337.5 810.5C337.5 810.5 208 1236.5 134 1495.5C60 1754.5 4.5 1634 4.5 1634"
                stroke="#5DC3FC"
                strokeDasharray="2 4 6 8"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2_11"
                x="0.0458679"
                y="0.891174"
                width="1086.44"
                height="1669.6"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_11"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_11"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
            <div>
              <div className="text-center md:text-left text-2xl md:text-4xl lg:text-5xl text-default-blue-700 font-semibold tracking-wider p-4">
                Bridging Health Gaps with Malaysia's Free OSA Diagnosis
              </div>
              <div className="text-center md:text-left text-lg md:text-lg lg:text-xl text-slate-950 font-medium tracking-wider p-4">
                We're dedicated to breaking down the barriers to essential OSA
                screenings—making them immediate, affordable, and accessible to
                all Malaysians
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src={drImg}
                className="hidden md:block object-cover w-full h-full"
                alt="Doctor"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={patientImg}
                className="hidden md:block object-cover w-full h-3/4"
                alt="Patient"
              />
            </div>
            <div className="p-4 md:pb-28 md:pr-28">
              <div className="text-center md:text-left text-2xl md:text-4xl lg:text-5xl text-default-blue-700 font-medium tracking-wide">
                RM250-RM800
                <span className="block md:inline text-lg md:text-lg lg:text-xl text-slate-950 font-normal tracking-tight">
                  The savings per patient with our online OSA
                  assessment
                </span>
              </div>
              <div className="text-center md:text-left text-2xl md:text-4xl lg:text-5xl text-default-blue-700 font-medium tracking-wide mt-8">
                20minutes
                <span className="block md:inline text-lg md:text-lg lg:text-xl text-slate-950 font-normal tracking-tight">
                  Time it takes to complete an online OSA assessment,
                  simplifying diagnosis for all.
                </span>
              </div>
              <div className="text-center md:text-left text-2xl md:text-4xl lg:text-5xl text-default-blue-700 font-medium tracking-wide mt-8">
                24/7 Availability
                <span className="block md:inline text-lg md:text-lg lg:text-xl text-slate-950 font-normal tracking-tight">
                  Available around the clock, providing flexibility to fit any
                  schedule
                </span>
              </div>
            </div>
        </div>

        {/* Responsive adjustments applied below */}
        <div className="px-4 sm:px-10 md:px-20 lg:px-52 py-28 grid place-items-center">
          <div className="text-center space-y-8">
            <div className="md:text-5xl text-2xl text-default-blue-700 font-medium">
              Here's our 3-steps process
            </div>
            <div className="md:text-2xl text-md text-default-blue-700 font-medium">
              Our assessment takes under 20 minutes to complete and provides you
              a result with 90% accuracy.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={startImg}
                  alt="Start"
                  className="w-32 h-32 md:w-48 md:h-48"
                />
                <div className="text-lg md:text-4xl text-default-blue-700 font-bold">
                  Step 1
                </div>
                <div className="text-sm md:text-xl text-slate-950 font-medium p-4 text-center">
                  Quickly input your sleep habits and health details into our
                  online form.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={submitImg}
                  alt="Submit"
                  className="w-32 h-32 md:w-48 md:h-48"
                />
                <div className="text-lg md:text-4xl text-default-blue-700 font-bold">
                  Step 2
                </div>
                <div className="text-sm md:text-xl text-slate-950 font-medium p-4 text-center">
                  Carefully review your answers to ensure accuracy. Accuracy is
                  key to reliable results.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={completeImg}
                  alt="Results"
                  className="w-32 h-32 md:w-48 md:h-48"
                />
                <div className="text-lg md:text-4xl text-default-blue-700 font-bold">
                  Step 3
                </div>
                <div className="text-sm md:text-xl text-slate-950 font-medium p-4 text-center">
                  Our algorithms analyze your data fast, showing your OSA risk
                  on our site.
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
            viewBox="0 0 1380 86"
            fill="none"
            preserveAspectRatio="xMaxYMax meet"
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <defs>
              <filter id="dropshadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />{" "}
                {/* Blur amount */}
                <feOffset dx="2" dy="2" result="offsetblur" />{" "}
                {/* Shadow offset */}
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.5" /> {/* Shadow intensity */}
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode /> {/* this contains the offset blurred image */}
                  <feMergeNode in="SourceGraphic" />{" "}
                  {/* this contains the element that the filter is applied to */}
                </feMerge>
              </filter>
            </defs>
            <path
              ref={secondPathRef}
              d="M1 25L169.5 67C241.942 89.9754 282.557 91.4611 355 67L509.5 25C616.971 -8.46951 680.162 -6.759 797 25L951.5 67C1047.77 89.7765 1099.61 91.7264 1186.5 67L1379.5 25"
              stroke="#58C8F8"
              filter="url(#dropshadow)" // Apply the filter here
            />
          </svg>
        <div className="px-4 sm:px-10 md:px-20 lg:px-52 pt-10 md:pt-20 pb-10 md:pb-20">
          <div className="text-center space-y-8">
            <div className="md:text-6xl text-2xl text-default-blue-700 font-medium">
              Assessment results delivered to patients, faster
            </div>
            <div className="md:text-3xl text-md text-default-blue-700 font-light p-4 md:p-20">
              Traditional sleep studies for diagnosing conditions like
              obstructive sleep apnea (OSA) or central sleep apnea require
              overnight lab sessions, our OSA prediction model can offer a
              diagnosis in just 20 minutes.
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 pb-16">
              <div className="flex items-center gap-4">
                <div className="text-lg md:text-xl text-default-blue-700 font-light">
                  OSA Prediction Model:
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12">
                  <img src={bar1Img} alt="bar1" className="w-full h-full" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-lg md:text-xl text-default-blue-700 font-light">
                  Hospital:
                </div>
                <div className="w-32 h-8 md:w-96 md:h-12">
                  <img src={bar2Img} alt="bar2" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
