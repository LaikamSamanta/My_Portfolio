import { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, projectTitle, isMainGallery = false }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const nextMainImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevMainImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {isMainGallery ? (
        <div className="main-gallery-container">
          <div className="main-gallery-image">
            <img 
              src={images[mainImageIndex]} 
              alt={`${projectTitle} screenshot ${mainImageIndex + 1}`}
              className="main-gallery-img"
              loading="lazy"
              decoding="async"
            />
            {images.length > 1 && (
              <>
                <button className="main-gallery-nav main-gallery-prev" onClick={prevMainImage}>
                  ‹
                </button>
                <button className="main-gallery-nav main-gallery-next" onClick={nextMainImage}>
                  ›
                </button>
                <div className="main-gallery-counter">
                  {mainImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="image-gallery">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
              >
                <img 
                  src={image} 
                  alt={`${projectTitle} screenshot ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );

};

export default ImageGallery;
