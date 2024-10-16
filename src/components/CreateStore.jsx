import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step6 from './steps/Step6'; // Импортируйте новый компонент Step5

const CreateStore = ({ setShowFooter }) => {
  const [formData, setFormData] = React.useState({
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

  return (
    <div>
      <Routes>
        <Route path="step1" element={<Step1 formData={formData} setFormData={setFormData} />} />
        <Route path="step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
        <Route path="step3" element={<Step3 formData={formData} setFormData={setFormData} />} />
        <Route path="step4" element={<Step4 formData={formData} setFormData={setFormData} />} />
        <Route path="step6" element={<Step6 formData={formData} setFormData={setFormData} />} /> {/* Новый маршрут для Step5 */}
      </Routes>
    </div>
  );
};

export default CreateStore;
