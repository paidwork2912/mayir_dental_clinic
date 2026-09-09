import { useEffect, useState } from "react";
import "./AppointmentModal.css";
import { services } from "../data/siteData";
function AppointmentModal() {
  const [showModal, setShowModal] = useState(false);

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patient, setPatient] = useState({ name: "", age: "", phone: "" });

  useEffect(() => {
    const openAppointment = () => {
      setShowModal(true);
    };

    window.addEventListener("openAppointmentModal", openAppointment);

    return () => {
      window.removeEventListener(
        "openAppointmentModal",
        openAppointment
      );
    };
  }, []);

  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();

    date.setDate(date.getDate() + index);

    return {
      day: date
        .toLocaleDateString("en-US", {
          weekday: "short",
        })
        .toUpperCase(),

      date: date.getDate(),

      fullDate: date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
  });

  const timeSlots = {
    Morning: [
      "11:00 AM",
      "11:30 AM",
    ],

    Afternoon: [
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
    ],

    Evening: [
      "05:00 PM",
      "06:00 PM",
      "07:00 PM",
      "08:00 PM",
      "09:00 PM",
      "10:00 PM",
    ],
  };

  const handleServiceChange = (service) => {
    setSelectedServices((previousServices) => {
      if (previousServices.includes(service)) {
        return previousServices.filter(
          (item) => item !== service
        );
      }

      return [...previousServices, service];
    });
  };

  const confirmAppointment = () => {
    if (!patient.name.trim() || !patient.age || !patient.phone.trim()) {
      alert("Please enter your name, age, and phone number.");
      return;
    }

    if (selectedServices.length === 0) {
      alert("Please select at least one service");
      return;
    }

    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    const servicesText = selectedServices
      .map((service, index) => `${index + 1}. ${service}`)
      .join("\n");

    const msg = `🦷 *New Appointment Request*

Hello Mayur Dental Care! I would like to schedule an appointment.

👤 *Patient details*
• Name: ${patient.name}
• Age: ${patient.age}
• Phone: ${patient.phone}

🩺 *Treatment requested (${selectedServices.length})*
${servicesText}

📅 *Preferred appointment*
• Date: ${selectedDate}
• Time: ${selectedTime}

Please confirm the availability. Thank you!`;

    const url =
      `https://wa.me/919757399548?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");

    setShowModal(false);
    setSelectedServices([]);
    setSelectedDate("");
    setSelectedTime("");
    setPatient({ name: "", age: "", phone: "" });
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedServices([]);
    setSelectedDate("");
    setSelectedTime("");
    setPatient({ name: "", age: "", phone: "" });
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="appointment-floating" role="dialog" aria-modal="true" aria-labelledby="appointment-title">

      {/* TOP HEADER */}

      <div className="appointment-floating-header">

        <div>
          <h2 id="appointment-title">Book Appointment</h2>

          <p>
            Select your preferred slot for consultation
          </p>
        </div>

        <button
          className="appointment-close"
          type="button"
          onClick={closeModal}
          aria-label="Close appointment"
        >
          ×
        </button>

      </div>


      {/* SCROLLABLE CONTENT */}

      <div className="appointment-floating-content">
        <section className="appointment-section patient-details">
          <h3>Your Details</h3>
          <div className="patient-fields">
            <label>
              Name
              <input
                type="text"
                value={patient.name}
                onChange={(event) => setPatient({ ...patient, name: event.target.value })}
                placeholder="Your full name"
                required
              />
            </label>
            <label>
              Age
              <input
                type="number"
                min="1"
                max="120"
                value={patient.age}
                onChange={(event) => setPatient({ ...patient, age: event.target.value })}
                placeholder="Age"
                required
              />
            </label>
            <label>
              Phone number
              <input
                type="tel"
                value={patient.phone}
                onChange={(event) => setPatient({ ...patient, phone: event.target.value })}
                placeholder="+91 97573 99548"
                required
              />
            </label>
          </div>
        </section>

        {/* SERVICES */}

        <section className="appointment-section">

          <h3>
            Select Services
            <span className="appointment-selection-count">
              {selectedServices.length ? `${selectedServices.length} selected` : "Choose one or more"}
            </span>
          </h3>

          <div className="appointment-services">

            {services.map(({ title }) => {

              const isSelected =
                selectedServices.includes(title);

              return (
                <label
                  key={title}
                  className={`service-checkbox ${
                    isSelected ? "checked" : ""
                  }`}
                >

                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() =>
                      handleServiceChange(title)
                    }
                  />

                  <span className="custom-checkbox">
                    {isSelected && "✓"}
                  </span>

                  <span className="service-checkbox-text">
                    {title}
                  </span>

                </label>
              );
            })}

          </div>

        </section>


        {/* DATE */}

        <section className="appointment-section">

          <h3>Select Date</h3>

          <div className="appointment-dates">

            {dates.map((item) => {

              const isSelected =
                selectedDate === item.fullDate;

              return (
                <button
                  key={item.fullDate}
                  type="button"
                  className={`appointment-date ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() =>
                    setSelectedDate(item.fullDate)
                  }
                >

                  <span>{item.day}</span>

                  <strong>{item.date}</strong>

                </button>
              );
            })}

          </div>

        </section>


        {/* TIME */}

        <section className="appointment-times">

          {Object.entries(timeSlots).map(
            ([period, slots]) => (

              <div
                className="appointment-time-group"
                key={period}
              >

                <h3>

                  <span className="time-period-icon">
                    {period === "Morning" && "☀"}
                    {period === "Afternoon" && "☀"}
                    {period === "Evening" && "☀"}
                  </span>

                  {period}

                </h3>

                <div className="time-grid">

                  {slots.map((time) => {

                    const isSelected =
                      selectedTime === time;

                    return (
                      <button
                        key={time}
                        type="button"
                        className={`time-slot ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() =>
                          setSelectedTime(time)
                        }
                      >
                        {time}
                      </button>
                    );
                  })}

                </div>

              </div>
            )
          )}

        </section>


        {/* CONFIRM */}

        <div className="appointment-confirm">

          <button
            type="button"
            className="confirm-appointment"
            onClick={confirmAppointment}
          >
            <span>Confirm Appointment</span>
            <span className="confirm-arrow">→</span>
          </button>

          <p>NO PAYMENT REQUIRED NOW</p>

        </div>

      </div>

    </div>
  );
}

export default AppointmentModal;