function Footer() {
  
  const openAppointment = () => {
    window.dispatchEvent(new Event("openAppointmentModal"));
  };
  return (
    <footer className="site-footer">

      <div className="container footer-grid">

        <div>
          <h3>Mayur Dental Care</h3>

          <p>
            Your smile deserves the best.
          </p>

          <a
onClick={openAppointment}            className="btn btn-light"
          >
            Book on WhatsApp &rarr;
          </a>
        </div>


        <div>

          <h4>NAVIGATE</h4>

          <ul>
            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#doctors">Doctors</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

        </div>


        <div>

          <h4>REACH US</h4>

          <p>
            1st floor, Vighnaharta, Bldg No.10, 1, near Canara Bank,
            Tagore Nagar, Vikhroli East, Mumbai, Maharashtra 400083
          </p>

          <p>
            <a href="tel:+919757399548">+91 97573 99548</a>
          </p>

          <p>
            <a href="mailto:mayurdentalcare@gamil.com">mayurdentalcare@gamil.com</a>
          </p>

          <small>
            Mon–Sat: 11:00 AM - 10:00 PM | Sun: Closed
          </small>

        </div>

      </div>


      <div className="container footer-bottom">

        <p>
          &copy; 2026 Mayur Dental Care.
          All rights reserved.
        </p>

        <p>
          Crafted with care for healthier, happier smiles.
        </p>

      </div>

    </footer>
  );
}

export default Footer;