import { useState, useCallback, useMemo, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, projectTitle, isMainGallery = false }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [preloadedImages, setPreloadedImages] = useState(new Set());



  const nextMainImage = useCallback(() => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevMainImage = useCallback(() => {
    setMainImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleImageLoad = useCallback((index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  }, []);

  const handleImageError = useCallback((index, imageSrc) => {
    console.error(`Failed to load image: ${imageSrc}`);
    setLoadedImages(prev => new Set([...prev, index])); // Mark as "loaded" to hide skeleton
  }, []);

  // Preload images for better performance
  useEffect(() => {
    const preloadImage = (src, index) => {
      if (preloadedImages.has(index)) return;
      
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, index]));
      };
      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`);
        setPreloadedImages(prev => new Set([...prev, index])); // Mark as preloaded to avoid retries
      };
      img.src = src;
    };

    // Preload first 2 images immediately, others lazily
    images.forEach((imageSrc, index) => {
      if (index < 2) {
        preloadImage(imageSrc, index);
      }
    });
  }, [images, preloadedImages]);

  // Preload next and previous images when main image changes
  useEffect(() => {
    if (images.length <= 1) return;

    const preloadImage = (src, index) => {
      if (preloadedImages.has(index)) return;
      
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, index]));
      };
      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`);
        setPreloadedImages(prev => new Set([...prev, index]));
      };
      img.src = src;
    };

    // Preload adjacent images
    const nextIndex = (mainImageIndex + 1) % images.length;
    const prevIndex = (mainImageIndex - 1 + images.length) % images.length;
    
    preloadImage(images[nextIndex], nextIndex);
    preloadImage(images[prevIndex], prevIndex);
  }, [mainImageIndex, images, preloadedImages]);

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
              fetchpriority={mainImageIndex === 0 ? "high" : "auto"}
              onLoad={() => handleImageLoad(mainImageIndex)}
              onError={() => handleImageError(mainImageIndex, images[mainImageIndex])}
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
              fetchpriority="low"
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
                  fetchpriority={index < 2 ? "high" : "auto"}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index, image)}
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
