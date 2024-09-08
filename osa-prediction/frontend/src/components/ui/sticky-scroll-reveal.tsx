import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll(".content-section");

      sections.forEach((section, index) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <div className="flex w-full"> {/* Flex container for side-by-side layout */}
  {/* Content Container */}
  <div className="flex-grow overflow-auto"> {/* Make text section grow and scrollable */}
    {content.map((item, index) => (
      <motion.div
        key={item.title + index}
        className="content-section my-10" // Adjust margins as needed
        initial={{ opacity: 0 }}
        animate={{ opacity: activeCard === index ? 1 : 0.3 }}
        style={{ minHeight: '10vh' }} // Keep minimum height
      >
        <h2 className="text-4xl font-bold text-slate-600 text-left pl-[20rem] ">{item.title}</h2>
        <p className="text-xl text-slate-400 mt-5 text-left pl-[20rem] pr-[20rem]">{item.description}</p>
      </motion.div>
    ))}
  </div>
</div>
  );
};