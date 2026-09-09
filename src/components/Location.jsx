function Location() {
  const openAppointment = () => {
  window.dispatchEvent(
    new Event("openAppointmentModal")
  );
};
  return (
    <section id="location" className="location-section">
      <div className="container">

        <span className="section-tag">
          — VISIT US
        </span>

        <h2>
          Tucked in a quiet corner of the city.
        </h2>

        <div className="location-grid">

          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3789.506306804074!2d72.9296748!3d19.1132898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c796c4647d89%3A0xef9594add67c56fc!2sMayur%20Dental%20Care!5e1!3m2!1sen!2sin!4v1788355963213!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Map showing Mayur Dental Care in Vikhroli East, Mumbai"
            ></iframe>
          </div>


          <div className="location-details">

            <div className="info-card">
              <span className="icon">📍</span>

              <div>
                <small>ADDRESS</small>
                <address>
                  1st floor, Vighnaharta, Bldg No.10, 1, near Canara Bank,
                  Tagore Nagar, Vikhroli East, Mumbai, Maharashtra 400083
                </address>
              </div>
            </div>


            <div className="info-card">
              <span className="icon">🕒</span>

              <div>
                <small>HOURS</small>
                <p>
                  Monday–Saturday: 11:00 AM - 10:00 PM |
                  Sunday: Closed
                </p>
              </div>
            </div>


            <div className="contact-row">

              <div className="info-card">
                <span className="icon">📞</span>

                <div>
                  <small>PHONE</small>
                  <p><a href="+919757399548">+91 97573 99548</a></p>
                </div>
              </div>


              <div className="info-card">
                <span className="icon">✉️</span>

                <div>
                  <small>EMAIL</small>
                  <p><a href="mailto:mayurdentalcare@gamil.com">mayurdentalcare@gamil.com</a></p>
                </div>
              </div>

            </div>


            <button
  className="btn btn-dark full-width"
  onClick={openAppointment}
>
  Book your appointment &nbsp; WhatsApp ↗
</button>
<a className="location-directions" href="https://maps.app.goo.gl/bXaWkzVgvzuFuw6MA" target="_blank" rel="noreferrer">
  Get directions on Google Maps
</a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Location;