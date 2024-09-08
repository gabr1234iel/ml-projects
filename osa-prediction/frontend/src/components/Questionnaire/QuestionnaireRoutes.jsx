import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QuestionnaireProvider } from './QuestionnaireContext';
import TonsilSize from './TonsilSize';
import MallampatiScore from './MallampatiScore';
import NeckCircumference from './NeckCircumference';
import BMICalculator from './BMICalculator';
import ESSForm from './ESSForm';
import HasPosteriorPillarWebbing from './HasPosteriorPillarWebbing';
import HasRetrongathia from './HasRetrongathia';
import HasMicrongathia from './HasMicrongathia';
import HasDiabetes from './HasDiabetes';
import Sex from './Sex';
import Result from './Result';



const QuestionnaireRoutes = () => {
  return (
    <QuestionnaireProvider>
        <Routes>
            <Route path="tonsil-size" element={<TonsilSize />} />
            <Route path="mallampati-score" element={<MallampatiScore />} />
            <Route path="neck-circumference" element={<NeckCircumference />} />
            <Route path="ess" element={<ESSForm />} />
            <Route path="bmi" element={<BMICalculator />} />
            <Route path="has-posterior-pillar-webbing" element={<HasPosteriorPillarWebbing />} />
            <Route path="has-retrognathia" element={<HasRetrongathia />} />
            <Route path="has-micrognathia" element={<HasMicrongathia />} />
            <Route path="has-diabetes" element={<HasDiabetes />} />
            <Route path="sex" element={<Sex />} />
 
            <Route path="result" element={<Result />} />
        </Routes>
    </QuestionnaireProvider>
  );
};

export default QuestionnaireRoutes;
