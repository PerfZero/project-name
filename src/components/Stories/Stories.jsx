import React, { useState, useEffect } from 'react';
import './Stories.css';

const images = [
  { id: 1, icon: '/img/Image-56.png', color: 'red', alt: 'Story 1' },
  { id: 2, icon: '/img/Image-56-1.png', color: 'green', alt: 'Story 2' },
  { id: 3, icon: '/img/Image-56-2.png', color: 'blue', alt: 'Story 3' },
  { id: 4, icon: '/img/Image-56-3.png', color: 'yellow', alt: 'Story 4' },
];

const Stories = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewedStories, setViewedStories] = useState(new Set());

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsPlaying(true);
  };

  const closeModal = () => {
    if (selectedImage) {
      setViewedStories((prev) => new Set(prev).add(selectedImage.id)); // Добавляем просмотренную историю
    }
    setSelectedImage(null);
    setIsPlaying(false);
  };

  const nextImage = () => {
    if (selectedImage) {
      setViewedStories((prev) => new Set(prev).add(selectedImage.id)); // Добавляем просмотренную историю
    }
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex + 1;
  
    if (nextIndex < images.length) {
      setSelectedImage(images[nextIndex]);
    } else {
      closeModal(); // Закрываем, если это было последнее изображение
    }
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex - 1;
  
    if (prevIndex >= 0) {
      setSelectedImage(images[prevIndex]);
    } else {
      closeModal(); // Закрываем, если это первая история
    }
  };
  
  

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextImage();
      }, 3000); // Меняем изображение каждые 3 секунды
    }

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [isPlaying, selectedImage]);

  return (
    <div>
      <div className="icons">
        {images.map((image) => (
          <img
            key={image.id}
            className={`image ${viewedStories.has(image.id) ? 'viewed' : ''}`} // Добавление класса viewed
            src={image.icon}
            alt={image.alt}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="story-progress-bar">
            {images.map((image) => (
              <div
                key={image.id}
                className={`progress-items ${selectedImage.id === image.id ? 'active' : ''}`}
              >
                <div className={`fill ${viewedStories.has(image.id) ? 'viewed' : ''} ${selectedImage.id === image.id ? 'animate' : ''}`} />
              </div>
            ))}
          </div>
          <div
            className="modal-image"
            style={{ backgroundColor: selectedImage.color }}
            aria-label={selectedImage.alt}
          />
          <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</button>
<button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</button>

        </div>
      )}
    </div>
  );
};

export default Stories;
