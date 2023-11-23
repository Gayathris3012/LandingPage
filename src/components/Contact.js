import React from "react";

const Contact = () => {
  const contactStyle = {
    background: "linear-gradient(to right, #ff6b6b, #ffb8b8)",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  };

  return (
    <section id="contact" style={contactStyle}>
      <div className="container mt-4">
        <h2 className="mb-4">Contact Us</h2>
        <ul className="list-unstyled">
          <li>
            <i className="fas fa-phone"></i> Contact Us: (123) 456-7890
          </li>
          <li>
            <i className="fas fa-envelope"></i> Email Us:
            cravereastaurant@gmail.com
          </li>
          <li>
            <i className="fas fa-map-marker"></i> Our Location: 123 Main Street,
            Tamilnadu.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
