import { useEffect, useState } from "react";
import { heroPhotos } from "../data/siteData";

function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroPhotos.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const openAppointment = () => {
  window.dispatchEvent(
    new Event("openAppointmentModal")
  );
};
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">

        <div className="hero-content">

          <span className="badge">
            ✨ GENTLE. MODERN. TRUSTED.
          </span>

          <h1>
            A calmer kind of dental care, built around you.
          </h1>

          <p>
            Your smile deserves the best. Where modern dentistry meets a calm, caring touch.
            From routine cleanings to full smile makeovers —
            book on WhatsApp in under a minute.
          </p>

          <div className="hero-buttons">
            <button
  className="btn btn-dark"
  onClick={openAppointment}
>
  Book Appointment
</button>

            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-card">
            {heroPhotos.map((photo, index) => (
              <img
                className={`hero-slide ${index === activeImage ? "hero-slide-active" : ""}`}
                key={photo.src}
                src={photo.src}
                alt={index === activeImage ? photo.alt : ""}
                width="800"
                height="900"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : undefined}
                aria-hidden={index !== activeImage}
              />
            ))}
          </div>

          <div className="rating-badge">
            <span className="star">★</span>

            <div>
              <strong>4.9 / 5 on Google</strong>
              <p>from 238+ verified visits</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;