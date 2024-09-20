import { useEffect } from 'react';

function TelegramBackButton() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;

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
  }, []);

  return null;
}

export default TelegramBackButton;
