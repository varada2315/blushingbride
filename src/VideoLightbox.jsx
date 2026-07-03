import React, { useEffect } from 'react';

function VideoLightbox({ isOpen, videoUrl, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-modal" style={{ display: 'flex' }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="lightbox-content">
        <button className="lightbox-close" aria-label="Close Lightbox" onClick={onClose}>&times;</button>
        <iframe 
          className="lightbox-iframe" 
          src={videoUrl} 
          allow="autoplay; encrypted-media" 
          allowFullScreen
          title="Cinematic Video Lightbox"
        ></iframe>
      </div>
    </div>
  );
}

export default VideoLightbox;
