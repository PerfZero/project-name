import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

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

  useEffect(() => {
    // Инициализация кнопки "назад"
    const backButton = window.Telegram.WebApp.BackButton;

    // Показать кнопку "назад"
    backButton.show();

    // Установить обработчик нажатия на кнопку "назад"
    backButton.onClick(() => {
      navigate(-1); // Вернуться на предыдущий шаг
    });

    // Очистка обработчика при размонтировании компонента
    return () => {
      backButton.offClick(() => {
        navigate(-1);
      });
      backButton.hide();
    };
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="step1" element={<Step1 formData={formData} setFormData={setFormData} />} />
        <Route path="step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
        <Route path="step3" element={<Step3 formData={formData} setFormData={setFormData} />} />
        <Route path="step4" element={<Step4 formData={formData} setFormData={setFormData} />} />
        <Route path="step5" element={<Step5 formData={formData} setFormData={setFormData} />} />
      </Routes>
    </div>
  );
};

export default CreateStore;