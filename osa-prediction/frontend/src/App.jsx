import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout/Layout';
import Model from './pages/Model';
import Osa from './pages/Osa';
import StartQuestionnaire from './components/Questionnaire/StartQuestionnaire';
import QuestionnaireLayout from './components/Questionnaire/QuestionnaireLayout';
import QuestionnaireRoutes from './components/Questionnaire/QuestionnaireRoutes';

const App = () => {
  return (

    <>
    <head><title>OSA Prediction</title></head>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="model" element={<Model />} />
          <Route path="osa" element={<Osa />} />
        </Route>
        <Route path="questionnaire" element={<QuestionnaireLayout />}>
          <Route index element={<StartQuestionnaire />} />
          <Route path="*" element={<QuestionnaireRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
 
  );
};

export default App;
