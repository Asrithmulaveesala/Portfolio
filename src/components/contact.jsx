import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import './contact.css'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_g900uqk',    // Your Service ID
      'template_lg1wyhr',   // Your Template ID
      form.current,
      '7Jo7ryP8cBKXj8M9n'   // Your Public Key
    ).then(
      () => alert('Message sent successfully!'),
      (error) => alert('Failed to send message: ' + error.text)
    );

    e.target.reset();
  };

  return (
    <motion.section id="contact" className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="form-wrapper">
        <h2 className="contact-title">Let's Connect</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user" // IMPORTANT: This must match {{user}} in your EmailJS template
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
