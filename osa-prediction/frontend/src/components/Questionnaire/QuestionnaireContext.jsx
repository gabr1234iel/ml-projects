import React, { createContext, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export const QuestionnaireContext = createContext();

export const QuestionnaireProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tonsilSize: null,
    MP: null,
    isNeckCircumferenceLargerThan40: null,
    ESS: null,
    isMorbidlyObese: null,
    hasPosteriorPillarWebbing: null,
    hasRetrognathia: null,
    hasMicrognathia: null,
  });

  console.log(formData);



  // Define an array of objects containing links and labels
  const navLinks = [
    { link: 'tonsil-size', label: '1', key: 'tonsilSize'},
    { link: 'mallampati-score', label: '2', key: 'MP'},
    { link: 'neck-circumference', label: '3', key: 'isNeckCircumferenceLargerThan40'},
    { link: 'ess', label: '4', key: 'ESS'},
    { link: 'bmi', label: '5', key: 'isMorbidlyObese'},
    { link: 'has-posterior-pillar-webbing', label: '6', key: 'hasPosteriorPillarWebbing'},
    { link: 'has-retrognathia', label: '7', key: 'hasRetrognathia'},
    { link: 'has-micrognathia', label: '8', key: 'hasMicrognathia'}
  ];

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  
  const validateData = (newData) => {
    let newErrors = {};

    // Tonsil Size: Must be a number between 0 and 4
    if (newData.tonsilSize !== undefined) {
      if (newData.tonsilSize < 0 || newData.tonsilSize > 4) {
        newErrors.tonsilSize = 'Tonsil size must be between 0 and 4';
      }
    }

    // MP (Mallampati Score): Must be a number between 1 and 4
    if (newData.MP !== undefined) {
      if (newData.MP < 1 || newData.MP > 4) {
        newErrors.MP = 'Mallampati score must be between 1 and 4';
      }
    }

    // ESS (Epworth Sleepiness Scale): Must be a number between 0 and 24
    if (newData.ESS !== undefined) {
      if (newData.ESS < 0 || newData.ESS > 24) {
        newErrors.ESS = 'ESS score must be between 0 and 24';
      }
    }

    // Booleans: isNeckCircumferenceLargerThan40, isMorbidlyObese, hasPosteriorPillarWebbing, hasRetrognathia, hasMicrognathia
    // These should be either true or false
    const booleanFields = [
      'isNeckCircumferenceLargerThan40',
      'isMorbidlyObese',
      'hasPosteriorPillarWebbing',
      'hasRetrognathia',
      'hasMicrognathia'
    ];
    booleanFields.forEach(field => {
      if (newData[field] !== undefined && typeof newData[field] !== 'boolean') {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} must be true or false`;
      }
    });

    return newErrors;
  };

  const updateFormData = (newData) => {
    const newErrors = validateData(newData);
    if (Object.keys(newErrors).length === 0) {
      setFormData({ ...formData, ...newData });
    } else {
      setErrors(newErrors);
    }
  };

  const handleNavClick = (link) => {
    return () => { 
      navigate(`../${link}`);
    };
  }

  const isResultRoute = location.pathname.includes('result');
  const shouldRenderButtons = !isResultRoute;


  return (
    <QuestionnaireContext.Provider value={{ formData, updateFormData, errors }}>
        { shouldRenderButtons && (<div className="lg:flex absolute hidden py-4 w-full justify-center items-center gap-x-6 flex-wrap">
          <div className="sm:block hidden absolute w-[420px] h-1 bg-white z-0"></div>
          {/* Map over the navLinks array */}
          {navLinks.map((navLink, index) => (
            <button key={index} onClick={handleNavClick(navLink.link)} className="rounded-full bg-white w-[40px] h-10 flex items-center justify-center font-bold z-10 my-2">
              {formData[navLink.key] !== null ? (
                <div className="bg-green-500 w-3 h-3 rounded-full"></div> // Green empty button
              ) : (
                navLink.label // Number for navigation
              )}
            </button>
          ))}
        </div>)}
      {children}
    </QuestionnaireContext.Provider>
  );
};