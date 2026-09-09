import doc1 from "../assets/certifcatess/doc1.jpeg";
import doc2 from "../assets/certifcatess/doc2.jpeg";

const credentials = [
  {
    image: doc1,
    label: "Dr. Shefali Jain",
    alt: "Dental registration certificate of Dr. Shefali Jain",
  },
  {
    image: doc2,
    label: "Dr. Pankaj Jain",
    alt: "Dental registration certificate of Dr. Pankaj Jain",
  },
];

function Credentials() {
  return (
    <section id="verified-credentials" className="credentials-section">
      <div className="container">
        <div className="credentials-heading">
          <span className="section-tag">— VERIFIED CREDENTIALS</span>
          <h2>Qualified care you can feel confident about.</h2>
          <p>
            We believe in making our doctors&apos; professional registrations
            visible, so you can choose your dental care with confidence.
          </p>
        </div>

        <div className="credentials-grid">
          {credentials.map((credential) => (
            <article className="credential-card" key={credential.label}>
              <div className="credential-image-frame">
                <img
                  className="credential-image"
                  src={credential.image}
                  alt={credential.alt}
                  loading="lazy"
                />
              </div>
              <div className="credential-details">
                <div>
                  <span className="credential-badge">Verified document</span>
                  <h3>{credential.label} registration certificate</h3>
                  <p>Dental registration under the Dentists Act, 1948.</p>
                </div>
                <a
                  className="credential-link"
                  href={credential.image}
                  target="_blank"
                  rel="noreferrer"
                >
                  View full certificate &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
