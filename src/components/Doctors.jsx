import { doctors } from "../data/siteData";


function Doctors() {
  return (
    <section id="doctors" className="doctors-section">
      <div className="container">
        <div className="doctors-heading">
          <span className="section-tag">— MEET OUR EXPERTS</span>
          <h2>The people behind your brighter smile.</h2>
          <p>Experienced specialists committed to your dental health and comfort.</p>
        </div>
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <article className={`doctor-card ${doctor.isOwner ? "doctor-card-owner" : "doctor-card-support"}`} key={doctor.name}>
              <div className={`doctor-portrait ${doctor.accent}`}>
                {doctor.photo ? (
                  <img src={doctor.photo} alt={`${doctor.name}, ${doctor.qualification || doctor.role}`} loading="lazy" width="700" height="700" />
                ) : (
                  <div className="doctor-photo-placeholder" role="img" aria-label={`Photo not available for ${doctor.name}`}>
                    <span>Photo not available</span>
                  </div>
                )}
                <span aria-hidden="true">{doctor.isOwner ? "Clinic Owner" : doctor.role || "Dental Care Team"}</span>
              </div>
              <div className="doctor-details">
                <h3>{doctor.name}</h3>
                <strong>{doctor.qualification || doctor.role}</strong>
                {doctor.registration && <small className="doctor-registration">{doctor.registration}</small>}
                <div className="doctor-stats">
                  <span><b>{doctor.experience}</b> Experience</span>
                  <span><b>{doctor.specialty}</b> Expert in</span>
                  <span><b>{doctor.achievement}</b> Achievement</span>
                </div>
                <ul>
                  {doctor.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => window.dispatchEvent(new Event("openAppointmentModal"))}
                >
                Contact us
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
