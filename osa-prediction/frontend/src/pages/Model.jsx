import React, {useState} from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import pythonImg from "../assets/python.png";
import sckitImg from "../assets/scikit.png";
import pandaImg from "../assets/pandas.png";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { TracingBeam } from "../components/ui/tracing-beam";
import corrHeatMap from "../assets/corr_heatmap.png";
import dataPrep from "../assets/data.png";
import modelImg from "../assets/model.png";
import decisionTreeImg from "../assets/decisionTree.jpg";
import literatureImg from "../assets/literature.png";

const Model = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const magicTextStyles = {
    animation: "background-pan 3s linear infinite",
    background:
      "linear-gradient(to right, rgb(4, 125, 196), rgb(56, 182, 255), rgb(255, 223, 43), rgb(228, 196, 13))",
    backgroundSize: "200%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline",
  };
  const dummyContent = [
    {
      title:
        "Heatmap Analysis: Exploring the Correlations Among Factors Influencing OSA",
      description: (
        <>
          <p>
            This heatmap serves as the foundational analysis for our predictive
            model of Obstructive Sleep Apnea (OSA). It is a visual
            representation of the relationships between various factors that may
            contribute to the risk and severity of OSA, such as tonsil size,
            neck circumference, sleepiness scales, and anatomical features. The
            intensity of the colors on the heatmap corresponds to the strength
            and direction of the correlation between these factors.
          </p>
          <p>
            Conducting this analysis allows us to pinpoint the most significant
            predictors of OSA, ensuring that our prediction model focuses on
            relevant features. Moreover, it aids in identifying any potential
            issues of multicollinearity—where variables are highly
            interdependent—which could compromise the model's effectiveness.
          </p>
          <p>
            This step not only enhances the accuracy and reliability of our
            predictive model but also deepens our clinical understanding of OSA
            and guides future research. Through this comprehensive approach, we
            are laying the groundwork for a model that could significantly
            impact the diagnosis and treatment of OSA.
          </p>
        </>
      ),
      badge: "Initial Step",
      image: corrHeatMap,
    },
    {
      title:
        "Prepare data by cleaning, handling missing values, scaling, and encoding categories",
      description: (
        <>
          <p>
            Before we can utilize the dataset for constructing a predictive
            model for Obstructive Sleep Apnea (OSA), it's essential to prepare
            the data through several preprocessing steps. The dataset, as
            observed, includes variables like Diabetes Mellitus, Neck
            Circumference (NC), and the Epworth Sleepiness Scale (ESS), among
            others. Our first task is to cleanse the data, ensuring it is free
            from inaccuracies or inconsistencies. This involves correcting
            anomalies and standardizing the format of the data entries.
          </p>
          <p>
            Next is scaling the data , which involves normalizing or
            standardizing numerical values so that each feature contributes
            equally to the analysis. This is particularly important when our
            model includes computations that are sensitive to the scale of the
            data.
          </p>
          <p>
            Finally, for categorical variables, we apply encoding techniques to
            transform these non-numerical labels into a format that can be
            understood by our algorithms. However, instead of one-hot encoding,
            which creates a new binary column for each category level, we use a
            different method that's more suitable for our dataset. This might be
            label encoding or a custom encoding scheme designed to preserve the
            ordering of categories if such a relationship exists.
          </p>
        </>
      ),
      badge: "DataPrep",
      image: dataPrep,
    },
    {
      title:
        "Evaluate and select appropriate machine learning algorithms for developing the OSA prediction model",
      description: (
        <>
          <p>
            In developing our prediction model for Obstructive Sleep Apnea
            (OSA), we will consider several machine learning algorithms suitable
            for classification tasks. Logistic Regression is a strong starting
            point due to its simplicity and effectiveness in binary
            classification, offering clear probabilities for each prediction.
            Decision Trees would be beneficial for their interpretability and
            ability to process various types of data, though we must be cautious
            of overfitting. To mitigate this, we could turn to a Random Forest
            algorithm, which combines multiple decision trees to enhance
            predictive accuracy and robustness. Additionally, Support Vector
            Machines (SVM) could be explored for their proficiency in dealing
            with high-dimensional data. Each algorithm will be rigorously
            evaluated on its performance with our specific dataset to ensure the
            chosen model offers the most reliable and accurate predictions for
            OSA.
          </p>
        </>
      ),
      badge: "Model Selection",
      image: literatureImg,
    },
    {
      title:
        "Train selected models on preprocessed data, applying cross-validation to ensure generalizability",
      description: (
        <>
          <p>
            After choosing the appropriate machine learning algorithms for our
            OSA prediction model, we proceed to train these models using the
            preprocessed dataset. To ensure that our models will perform well on
            new, unseen data and not just the data they were trained on, we
            employ a technique called cross-validation. Specifically, we use the
            Leave-One-Out cross-validation method where we train the model on
            all data points except one and test the model on that single
            excluded data point. This process is repeated for each data point in
            the dataset, ensuring that each instance serves as an independent
            test case.
          </p>
          <p>
            As our benchmark for evaluating model performance, we use
            accuracy—the proportion of total correct predictions made by the
            model. This metric will help us in identifying the most effective
            algorithm for our OSA prediction task, aiming for the highest
            accuracy across all the cross-validation iterations. The model that
            consistently shows the best generalizability through this rigorous
            validation process will be selected as our final predictive model
            for OSA.
          </p>
        </>
      ),
      badge: "Train Phase",
      image: decisionTreeImg,
    },
    {
      title:
        "Assess model accuracy, precision, recall, and other relevant metrics to evaluate performance.",
      description: (
        <>
          <p>
            At the final evaluation stage, we measure our OSA prediction model's
            performance using a suite of metrics beyond simple accuracy.
            Precision helps us understand the correctness of our positive OSA
            predictions, while recall ensures we're not missing actual cases of
            OSA, which is critical for patient outcomes. The F1 score combines
            precision and recall, providing a harmonized measure for models
            where balance is key, especially in uneven datasets. We may also
            consider the ROC-AUC score to gauge the model’s discriminative
            capability and the confusion matrix for a detailed view of
            prediction results. Together, these metrics offer a comprehensive
            picture of our model’s strengths and weaknesses, guiding us toward
            the most reliable and clinically useful model for detecting OSA.
          </p>
        </>
      ),
      badge: "Evaluation Stage",
      image: modelImg,
    },
  ];
  const modelVariants = {
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
  const words = [
    {
      text: "Our",
    },

    {
      text: "Prediction Model",
      className: "text-default-blue-700 dark:text-default-blue-600",
    },
    {
      text: "is Built with :",
    },
  ];

  const floatVariants = {
    float: {
      y: ["0%", "5%", "0%"],
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
      <TracingBeam className="py-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative px-4">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2
                className="text-5xl w-fit my-8 font-bold  "
                style={{
                  ...magicTextStyles,
                }}
              >
                {" "}
                {item.badge}
              </h2>

              <p className="text-3xl text-default-blue-700 dark text-mb-4 font-bold mb-5">
                {item.title}
              </p>

              <div className="text-xl text-slate-950 dark font-medium tracking-wider">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    className="rounded-lg mb-6 object-cover lg:p-16  cursor-pointer"
                    onClick={() => openModal(item.image)}
                    style={{ height: "100%" }}
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
          {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button onClick={closeModal} className="absolute top-0 right-0 p-2">
              ✖
            </button>
            <img src={selectedImage} alt="Enlarged view" className="max-w-full h-auto" />
          </div>
        </div>
      )}
        </div>
      </TracingBeam>
      <div className="mx-auto max-w-screen-2xl grid grid-cols-3 grid-rows-2 gap-4 px-4 pb-32 relative bg-gray-300 max-md:hidden">
        <div className="col-span-3 row-span-1 flex justify-center items-center">
          <TypewriterEffectSmooth words={words} />
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center">
          <motion.div variants={floatVariants} animate="float">
            <DirectionAwareHover imageUrl={pythonImg}>
              <p className="font-bold text-xl">Python</p>
              <p className="font-normal text-sm">Python.org</p>
            </DirectionAwareHover>
          </motion.div>
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center">
          <motion.div variants={floatVariants} animate="float">
            <DirectionAwareHover imageUrl={pandaImg}>
              <p className="font-bold text-xl">Pandas</p>
              <p className="font-normal text-sm">
                Python Data Analysis Library
              </p>
            </DirectionAwareHover>
          </motion.div>
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center">
          <motion.div variants={floatVariants} animate="float">
            <DirectionAwareHover imageUrl={sckitImg}>
              <p className="font-bold text-xl">Scikit Learn</p>
              <p className="font-normal text-sm">
                Python Machine Learning Library
              </p>
            </DirectionAwareHover>
          </motion.div>
        </div>
      </div>
      <div className="md:hidden pb-16">
        <h2 className="text-lg font-bold px-2 mb-5 border-t-2 mt-4">
          Our prediction model is built with:
        </h2>
        <div className="flex flex-wrap gap-2 px-4">
          <img src={pythonImg} alt="python" style={{ maxHeight: "60px" }} />
          <img src={pandaImg} alt="pandas" style={{ maxHeight: "60px" }} />
          <img src={sckitImg} alt="scikitlearn" style={{ maxHeight: "60px" }} />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Model;
