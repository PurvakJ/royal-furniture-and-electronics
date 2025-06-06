import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import ReviewForm from '../components/ReviewForm';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_ioq2lni',
      'template_ncrpsl4',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'anilsharma81376@gmail.com'
      },
      'DVqkghOUYqdZHgNda'
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setIsLoading(false);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Let's Connect</h1>
          <p className="subtitle">We'd love to reach you and provide you goods</p>
        </div>
      </section>    

      <div className="contact">
        <div className="contact-container">
          {/* Contact Form Section */}
          <section className="contact-form">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            {isSubmitted ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 8288885562"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event and any special requests..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={isLoading}>
                  {isLoading ? 'Sending...' : (
                    <>
                      <FaPaperPlane className="button-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </section>

          {/* Contact Info & Map */}
          <section className="contact-info-section">
            <h2>Contact Information</h2>
            <p className="info-subtitle">Reach out to us through any of these channels</p>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.226856689512!2d75.21388387646445!3d30.059031174916257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910d9003a4537d3%3A0xbb6de21f785ed33b!2sRoyal%20Furniture%20and%20Electronics!5e0!3m2!1sen!2sin!4v1749213030716!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{ border: '0' }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Location"
              ></iframe>
            </div>

            <div className="contact-details">
              <h3>Our Location</h3>
              <p><strong>Address:</strong> Maur Talwandi Road, Front Of Hariyali Pump</p>
              <p><strong>Phone:</strong> +91 99151-84617</p>
              <p><strong>Email:</strong> royalfurnitureandelectronics1@gmail.com</p>
              <p><strong>GSTIN:</strong> 07ABCDE1234F1Z2</p>

              <h3>Business Hours</h3>
              <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p>Sunday: 11:00 AM - 6:00 PM</p>
            </div>
          </section>
        </div>

        {/* Review Section */}
        <section className="reviews-section">
          <div className="section-header">
            <h2>Share Your Experience</h2>
            <p className="section-subtitle">We value your feedback about our services</p>
          </div>
          <ReviewForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
