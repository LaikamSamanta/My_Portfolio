import { useState, useCallback, useMemo } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, projectTitle, isMainGallery = false }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const nextMainImage = useCallback(() => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevMainImage = useCallback(() => {
    setMainImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleImageLoad = useCallback((index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  }, []);

  const preloadNextImage = useMemo(() => {
    if (images.length <= 1) return null;
    const nextIndex = (mainImageIndex + 1) % images.length;
    return images[nextIndex];
  }, [images, mainImageIndex]);

  return (
    <>
      {isMainGallery ? (
        <div className="main-gallery-container">
          <div className="main-gallery-image">
            <img 
              src={images[mainImageIndex]} 
              alt={`${projectTitle} screenshot ${mainImageIndex + 1}`}
              className={`main-gallery-img ${loadedImages.has(mainImageIndex) ? 'loaded' : 'loading'}`}
              loading={mainImageIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => handleImageLoad(mainImageIndex)}
              onError={(e) => {
                console.error(`Failed to load image: ${images[mainImageIndex]}`);
                e.target.style.display = 'none';
              }}
            />
            {!loadedImages.has(mainImageIndex) && (
              <div className="image-skeleton"></div>
            )}
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
          {/* Preload next image */}
          {preloadNextImage && (
            <img 
              src={preloadNextImage} 
              alt=""
              style={{ display: 'none' }}
              loading="lazy"
            />
          )}
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
                  className={`gallery-image ${loadedImages.has(index) ? 'loaded' : 'loading'}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  onLoad={() => handleImageLoad(index)}
                  onError={(e) => {
                    console.error(`Failed to load image: ${image}`);
                    e.target.style.display = 'none';
                  }}
                />
                {!loadedImages.has(index) && (
                  <div className="image-skeleton"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );

};

export default ImageGallery;
