import { useState, useEffect } from 'react';
import './CVDownloadAlert.css';

export default function CVDownloadAlert({ isOpen, onClose, onConfirm }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className={`cv-alert-overlay ${isOpen ? 'show' : ''}`}>
      <div className={`cv-alert ${isOpen ? 'show' : ''}`}>
        <div className="cv-alert-header">
          <div className="cv-alert-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          <h3 className="cv-alert-title">Download CV</h3>
        </div>
        
        <div className="cv-alert-content">
          <p>Would you like to download my CV?</p>
          <p className="cv-alert-subtitle">This will open the CV in a new tab for you to download.</p>
        </div>
        
        <div className="cv-alert-actions">
          <button 
            className="cv-alert-btn cv-alert-btn-cancel" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="cv-alert-btn cv-alert-btn-confirm" 
            onClick={handleConfirm}
          >
            Download CV
          </button>
        </div>
        
        <button className="cv-alert-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
