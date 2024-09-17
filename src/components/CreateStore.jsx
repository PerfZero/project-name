import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5'; // Импортируйте новый компонент Step5

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
  const location = useLocation();

  useEffect(() => {
    // Скрыть футер при загрузке компонента CreateStore
    setShowFooter(false);
    return () => {
      // Показать футер при уходе с компонента CreateStore
      setShowFooter(true);
    };
  }, [setShowFooter]);

  useEffect(() => {
    // Инициализация кнопки "Назад"
    if (window.Telegram && window.Telegram.WebApp) {
      const backButton = window.Telegram.WebApp.BackButton;

      // Показать кнопку "Назад", если текущий маршрут не является первым шагом
      if (location.pathname !== '/create-store/step1') {
        backButton.show();
      } else {
        backButton.hide();
      }

      // Обработка нажатия кнопки "Назад"
      backButton.onClick(() => {
        const currentStep = location.pathname.split('/').pop();
        switch (currentStep) {
          case 'step2':
            navigate('/create-store/step1');
            break;
          case 'step3':
            navigate('/create-store/step2');
            break;
          case 'step4':
            navigate('/create-store/step3');
            break;
          case 'step5':
            navigate('/create-store/step4');
            break;
          default:
            navigate('/create-store/step1');
            break;
        }
      });

      // Очистка при размонтировании компонента
      return () => {
        backButton.offClick(() => {
          const currentStep = location.pathname.split('/').pop();
          switch (currentStep) {
            case 'step2':
              navigate('/create-store/step1');
              break;
            case 'step3':
              navigate('/create-store/step2');
              break;
            case 'step4':
              navigate('/create-store/step3');
              break;
            case 'step5':
              navigate('/create-store/step4');
              break;
            default:
              navigate('/create-store/step1');
              break;
          }
        });
        backButton.hide();
      };
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <Routes>
        <Route path="step1" element={<Step1 formData={formData} setFormData={setFormData} />} />
        <Route path="step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
        <Route path="step3" element={<Step3 formData={formData} setFormData={setFormData} />} />
        <Route path="step4" element={<Step4 formData={formData} setFormData={setFormData} />} />
        <Route path="step5" element={<Step5 formData={formData} setFormData={setFormData} />} /> {/* Новый маршрут для Step5 */}
      </Routes>
    </div>
  );
};

export default CreateStore;