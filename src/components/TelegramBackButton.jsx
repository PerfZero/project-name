import { useEffect } from 'react';

function TelegramBackButton() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;

    const isHomePage = window.location.pathname === '/store'; // Проверка на главную страницу

    if (isHomePage) {
      if (!tg.BackButton.isVisible) {
        tg.BackButton.show();
      }

      const handleBackButtonClick = () => {
        window.history.back(); // Логика возврата на предыдущую страницу
      };

      tg.BackButton.onClick(handleBackButtonClick);

      return () => {
        tg.BackButton.offClick(handleBackButtonClick);
      };
    } else {
      tg.BackButton.hide(); // Скрыть кнопку на других страницах
    }
  }, []);

  return null;
}

export default TelegramBackButton;
