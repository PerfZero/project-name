import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5'; // Импортируйте новый компонент Step5

const CreateStore = ({ setShowFooter }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: '',
    storeType: '',
    theme: '',
    channelLink: '',
    botAPI: '',
    shopLogo: '',
    storeName: '',
    description: '',
    language: '',
    currency: '',
    payments: '',
    delivery: '',
    email: '',
    phone: '',
    // Добавьте новые поля, если они необходимы
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Скрыть футер при загрузке компонента CreateStore
    setShowFooter(false);
    return () => {
      // Показать футер при уходе с компонента CreateStore
      setShowFooter(true);
    };
  }, [setShowFooter]);

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      navigate(`/create-store/step${currentStep - 1}`);
    } else {
      // Если это первый шаг, можно перенаправить на предыдущую страницу или сделать что-то другое
      window.history.back();
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      navigate(`/create-store/step${currentStep + 1}`);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="step1" element={<Step1 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext} />} />
        <Route path="step2" element={<Step2 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext} />} />
        <Route path="step3" element={<Step3 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext} />} />
        <Route path="step4" element={<Step4 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext} />} />
        <Route path="step5" element={<Step5 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext} />} /> {/* Новый маршрут для Step5 */}
      </Routes>
    </div>
  );
};

export default CreateStore;