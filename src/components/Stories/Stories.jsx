import React, { useState, useEffect } from 'react';
import './Stories.css';

const images = [
  { id: 1, src: '/img/Image-56.png', alt: 'Icon1' },
  { id: 2, src: '/img/Image-56-1.png', alt: 'Icon2' },
  { id: 3, src: '/img/Image-56-2.png', alt: 'Icon3' },
  { id: 4, src: '/img/Image-56-3.png', alt: 'Icon4' },
];

const Stories = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0); // Текущая активная история
  const [viewedImages, setViewedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return; // Если модальное окно закрыто, нет смысла переключать истории

    // Закрыть модальное окно после последней истории
    if (activeImageIndex >= images.length) {
      setIsModalOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      handleNextImage();
    }, 5000); // Переключение через 5 секунд

    return () => clearTimeout(timer); // Очищаем таймер при размонтировании или изменении
  }, [activeImageIndex, isModalOpen]);

  const handleClick = (index) => {
    setActiveImageIndex(index);
    setViewedImages((prev) => [...new Set([...prev, index])]); // Добавляем в список просмотренных
    setIsModalOpen(true); // Открываем модальное окно
  };

  const handleNextImage = () => {
    if (activeImageIndex < images.length - 1) {
      setActiveImageIndex((prevIndex) => prevIndex + 1); // Переход к следующей истории
    } else {
      setIsModalOpen(false); // Закрытие модального окна после последней истории
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImageIndex(0); // Сброс индекса, если нужно
  };

  return (
    <div>
      <div className="icons">
        {images.map((image, index) => (
          <img
            key={image.id}
            className={`image ${viewedImages.includes(index) ? '' : 'activ_on'}`}
            src={image.src}
            alt={image.alt}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[activeImageIndex].src}
              alt="Active Story"
              className="active-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;
