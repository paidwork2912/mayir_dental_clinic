import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const openAppointment = () => {
    window.dispatchEvent(new Event("openAppointmentModal"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, message } = form;
    if ([name, email, phone, message].some((value) => !value.trim())) {
      alert("Please complete every field before sending your message.");
      return;
    }

    const whatsappMessage = `Hello Mayur Dental Care, I have a query.

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;
    window.open(
      `https://wa.me/9757399548?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const updateField = (event) => {
    setForm((previousForm) => ({ ...previousForm, [event.target.name]: event.target.value }));
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">

        <div className="contact-info">

          <span className="section-tag">
            — GET IN TOUCH
          </span>

          <h2>
            Have a question?
            <br />
            We'd love to <em>help</em>.
          </h2>

          <p>
            Drop us a note and we'll respond within a day.
            For urgent appointments, WhatsApp is the fastest
            way to reach our front desk.
          </p>


          <div className="contact-methods">

            <a
onClick={openAppointment}                 className="method-card whatsapp"
            >
              <span>💬</span>

              <div>
                <strong>WHATSAPP</strong>
                <p>Book in under a minute</p>
              </div>

              <span className="arrow">&rarr;</span>
            </a>


            <div className="method-card">
              <span>📞</span>

              <div>
                <strong>CALL</strong>
                <p><a href="tel:+919757399548">+91 97573 99548</a></p>
              </div>
            </div>


            <div className="method-card">
              <span>✉️</span>

              <div>
                <strong>EMAIL</strong>
                <p><a href="mailto:mayurdentalcare@gamil.com">mayurdentalcare@gamil.com</a></p>
              </div>
            </div>

          </div>

        </div>


        <div className="form-container">

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label>YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  required
                  placeholder="Jane Doe"
                />
              </div>

              <div className="form-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  placeholder="jane@example.com"
                />
              </div>

            </div>


            <div className="form-group">
              <label>PHONE</label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={updateField}
                required
                pattern="[0-9+() -]{7,}"
                placeholder="+91 97573 99548"
              />
            </div>


            <div className="form-group">
              <label>HOW CAN WE HELP?</label>

              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                required
                rows="4"
                placeholder="Tell us a bit about what you'd like to discuss..."
              ></textarea>
            </div>


            <button
              type="submit"
              className="btn btn-dark"
            >
              Send message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;