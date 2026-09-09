import { useEffect, useState } from "react";
import { galleryPhotos as photos } from "../data/siteData";

function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    if (activePhoto === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowLeft" && activePhoto > 0) {
        setActivePhoto((photo) => photo - 1);
      }
      if (event.key === "ArrowRight" && activePhoto < photos.length - 1) {
        setActivePhoto((photo) => photo + 1);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag">— INSIDE THE CLINIC</span>
            <h2>A space designed for calmer visits.</h2>
          </div>
          <p className="section-note">
            Take a look around our warm, modern clinic before your first visit.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              className={`gallery-photo gallery-photo-${index + 1}`}
              key={`${photo.src}-${index}`}
              type="button"
              onClick={() => setActivePhoto(index)}
              aria-label={`Open ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy"  />
              <span>{photo.title}</span>
            </button>
          ))}
        </div>
      </div>

      {activePhoto !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Clinic photo viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActivePhoto(null);
          }}
        >
          <button
            className="gallery-close"
            type="button"
            onClick={() => setActivePhoto(null)}
            aria-label="Close photo viewer"
          >
            ×
          </button>
          {activePhoto > 0 && (
            <button
              className="gallery-nav gallery-prev"
              type="button"
              onClick={() => setActivePhoto((photo) => photo - 1)}
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}
          <img
            className="gallery-lightbox-image"
            src={photos[activePhoto].src}
            alt={photos[activePhoto].alt}
          />
          {activePhoto < photos.length - 1 && (
            <button
              className="gallery-nav gallery-next"
              type="button"
              onClick={() => setActivePhoto((photo) => photo + 1)}
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Gallery;
