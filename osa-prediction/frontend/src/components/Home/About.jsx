import { motion } from "framer-motion";

const risks = [
  {
    id: 1,
    name: "Type 2 diabetes",
    description:
      "A metabolic disorder characterized by high blood sugar levels due to insulin resistance or a lack of insulin production.",
    image: "src/assets/risks-1.png",
  },
  {
    id: 2,
    name: "Heart disease and stroke",
    description:
      "Various heart conditions that include diseased vessels, structural problems, and blood clots, which can lead to stroke.",
    image: "src/assets/risks-2.png",
  },
  {
    id: 3,
    name: "High blood pressure",
    description:
      "This condition insidiously elevates the risk of catastrophic health events, such as heart attack and stroke",
    image: "src/assets/risks-3.png",
  },
  {
    id: 4,
    name: "Depression",
    description:
      "Persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.",
    image: "/src/assets/risks-4.png",
  },
];

const About = () => {
  const aboutVariants = {
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

  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Adjust the time here as per your requirement
      },
    },
  };

  return (
    <>
      <motion.div
        className="lg:mx-24 mx-4 py-32"
        id="skills"
        initial="hidden"
        animate="visible"
        variants={aboutVariants}
      >
        <div className="mb-20">
          <p className="text-xl text-default-blue-900 font-semibold mb-5">
            Did you know?
          </p>
          <h2 className="md:text-5xl text-4xl text-default-blue-700 font-bold mb-12">
            It’s estimated that more than{" "}
            <span className="font-black text-default-blue-500">80 %</span> of
            all sleep apnea cases go undiagnosed.
          </h2>
          <p className="text-xl">
            Going too long without treating OSA can lead to the following health
            complications:
          </p>
        </div>

        {/* risks card */}
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {risks.map((risk) => (
            <motion.div
              key={risk.id}
              className="bg-blue-200 p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
              variants={itemVariants}
            >
              <img
                src={risk.image}
                alt=""
                className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
              />
              <h3 className="text-2xl font-bold mb-4">{risk.name}</h3>
              <p className="text-default-blue-900">{risk.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-3 relative">
        <motion.div
          className="lg:mx-40 mx-4 py-32 col-span-2"
          id="skills"
          initial="hidden"
          animate="visible"
          variants={aboutVariants}
        >
          <div className="mb-20">
            <p className="text-2xl text-default-blue-900 font-semibold mb-5">
              Goodbye, Sleep Labs:
            </p>
            <h2 className="md:text-5xl text-4xl text-default-blue-700 font-bold mb-12">
              {" "}
              A New Chapter in <br></br>{" "}
              <span className="font-black text-default-blue-500">
                Obstructive Sleep Apnea
              </span>{" "}
              Diagnosis{" "}
            </h2>
          </div>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '20px'
            }}
            src="https://www.youtube.com/embed/dDi7ehhbwAs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
