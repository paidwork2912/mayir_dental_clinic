import logo from "../assets/logo.png";

function Header() {
  const openAppointment = () => {
    window.dispatchEvent(new Event("openAppointmentModal"));
  };
  return (
    <header className="site-header">
      <div className="container nav-container">
        <a className="logo" href="#home" aria-label="Mayur Dental Clinic home">
          <img className="logo-image" src={logo} alt="" />
          <span className="logo-text">Mayur Dental Care</span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="btn btn-dark" onClick={openAppointment}>
          Book Appointment →
        </button>
      </div>
    </header>
  );
}

export default Header;
