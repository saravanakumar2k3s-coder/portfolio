import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>Let’s Build Something Together</h2>
      <p>I’m always open to new projects, collaborations, or opportunities. Feel free to reach out!</p>
      <div className="separator">
      <div className="contact-info">
        <p>📧 Email: Saravanakumar2k3s@gmail.com</p>
        <p>💼 LinkedIn: <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">linkedin.com/in/Saravanakumar</a></p>
        <p>🐙 GitHub: <a href="https://github.com/saravanakumar2k3s-coder" target="_blank" rel="noreferrer">github.com/Saravanakumar</a></p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
