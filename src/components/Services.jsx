import { services } from "../data/siteData";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag">— OUR SERVICES</span>
            <h2>Complete dental care, under one warm roof.</h2>
          </div>
          <p className="section-note">
            Every treatment begins with a personal consultation. We will explain
            your options, treatment process, and expected timeline clearly.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className={`service-image-frame ${service.imageClass || ""}`}>
                <img className="service-image" src={service.image} alt={service.title} loading="lazy" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#location" className="service-link">
                Book a consult &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
