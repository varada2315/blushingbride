import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    services: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate API call success
    setIsSubmitted(true);
    setFeedbackMsg('Thank you for reaching out! We will get in touch with you shortly.');
  };

  return (
    <>
      {/* HERO COVER */}
      <section className="section theme-white" style={{ paddingTop: '150px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '4rem', color: 'var(--color-black)', marginBottom: '10px' }}>Contact Us</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#8c7f75' }}>
            Let's tell your story together
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="section theme-white fade-in-section" style={{ paddingTop: '20px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="contact-layout">
            
            {/* Left: Sidebar Info */}
            <div className="contact-info-sidebar">
              <div className="contact-info-block">
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: '1.8', opacity: 0.8, fontWeight: 300 }}>
                  Please fill in the form and provide as much detail as possible. This helps us understand your vision, requirements, and events to draft a precise and bespoke quote.
                </p>
              </div>
              
              <div className="contact-info-block">
                <span className="contact-info-title">Email Us</span>
                <a href="mailto:hello@houseontheclouds.com" className="contact-info-text" style={{ borderBottom: '1px solid rgba(0,0,0,0.15)', paddingBottom: '5px', alignSelf: 'flex-start' }}>
                  hello@houseontheclouds.com
                </a>
              </div>

              <div className="contact-info-block">
                <span className="contact-info-title">Call Us</span>
                <span class="contact-info-text">+91 99647 87383</span>
              </div>

              <div className="contact-info-block">
                <span className="contact-info-title">Offices</span>
                <span className="contact-info-text" style={{ fontWeight: 400 }}>Mumbai & Bangalore</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', opacity: 0.5 }}>House On The Clouds Private Limited</span>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div>
              {isSubmitted ? (
                <div className="form-feedback" style={{ display: 'block' }}>
                  {feedbackMsg}
                </div>
              ) : (
                <form id="contactForm" className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group-row">
                    {/* First Name */}
                    <div className="form-group">
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        className="form-control" 
                        placeholder=" " 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                    </div>
                    
                    {/* Last Name */}
                    <div className="form-group">
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        className="form-control" 
                        placeholder=" " 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                      />
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                    </div>
                  </div>

                  <div className="form-group-row">
                    {/* Email */}
                    <div className="form-group">
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-control" 
                        placeholder=" " 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                      <label htmlFor="email" className="form-label">Email Address *</label>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="form-control" 
                        placeholder=" "
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                    </div>
                  </div>

                  <div className="form-group-row">
                    {/* Event Dates */}
                    <div className="form-group">
                      <input 
                        type="text" 
                        id="eventDate" 
                        name="eventDate" 
                        className="form-control" 
                        placeholder=" "
                        value={formData.eventDate}
                        onChange={handleChange}
                      />
                      <label htmlFor="eventDate" className="form-label">Event Dates (e.g. Nov 12-14, 2026)</label>
                    </div>

                    {/* Event Location */}
                    <div className="form-group">
                      <input 
                        type="text" 
                        id="eventLocation" 
                        name="eventLocation" 
                        className="form-control" 
                        placeholder=" "
                        value={formData.eventLocation}
                        onChange={handleChange}
                      />
                      <label htmlFor="eventLocation" className="form-label">Event Location (City, Country)</label>
                    </div>
                  </div>

                  {/* Services dropdown */}
                  <div className="form-group form-select-wrapper">
                    <select 
                      id="services" 
                      name="services" 
                      className="form-control form-select" 
                      value={formData.services}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option value="photography">Photography Only</option>
                      <option value="films">Films Only</option>
                      <option value="both">Both Photography & Films</option>
                      <option value="ibtida">Ibtida Fine-Art Package</option>
                    </select>
                    <label htmlFor="services" className="form-label">Services Required *</label>
                    <span className="form-select-icon">&#9662;</span>
                  </div>

                  {/* Details message */}
                  <div className="form-group">
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-control" 
                      rows="4" 
                      placeholder=" " 
                      style={{ resize: 'none' }}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="message" className="form-label">Tell us more about your wedding and story...</label>
                  </div>

                  <div>
                    <button type="submit" className="btn-primary dark-btn" style={{ border: 'none' }}>
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
