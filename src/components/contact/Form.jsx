import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/conatct/Form.module.css";
import { email, phone, location } from "../../assets/contact_icons";

function Form() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    companyType: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id === "first-name" ? "firstName" : 
       id === "last-name" ? "lastName" : 
       id === "country" ? "country" : 
       id === "service" ? "companyType" : id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceId = "service_z3j06za";
    const templateId = "template_9bgmee6";
    const userId = "X_3WrrLkyKv8oDCz9";

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setFormStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          companyType: "",
          message: ""
        });
      }, (error) => {
        console.error("Failed to send email:", error.text);
        setFormStatus({
          submitting: false,
          submitted: false,
          error: "Failed to send message. Please try again."
        });
      });
  };

  return (
    <section className={styles.form_section}>
      <div className={styles.container}>
        {/* Left Side - Contact Form */}
        <div className={styles.formWrapper}>
          {formStatus.submitted ? (
            <div className={styles.successMessage}>
              <h3>Thank you for your message!</h3>
              <p>We've received your inquiry and will get back to you shortly.</p>
              <button 
                className={styles.submitButton}
                onClick={() => setFormStatus({ submitting: false, submitted: false, error: null })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={form} className={styles.form} onSubmit={handleSubmit}>
              {formStatus.error && (
                <div className={styles.errorMessage}>
                  {formStatus.error}
                </div>
              )}
              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="first-name">
                    First name*
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    className={styles.input}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="last-name">
                    Last Name*
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    className={styles.input}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="email">
                  How can we reach you?*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@framer.com"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="country">
                    Where are you from?*
                  </label>
                  <select 
                    className={styles.select} 
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your country...</option>
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="service">
                    What's the type of your company?*
                  </label>
                  <select 
                    className={styles.select} 
                    id="service"
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Startup">Startup</option>
                    <option value="SMB">Small/Medium Business</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Nonprofit">Non-profit</option>
                    <option value="Individual">Individual</option>
                  </select>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="message">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message..."
                  className={styles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? "Sending..." : "Submit Now"}
              </button>
            </form>
          )}
        </div>

        {/* Right Side - Contact Info */}
        <div className={styles.contactInfo}>
          <div className={styles.infoBox_ctr}>
            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>
                <span>{email}</span> Email{" "}
                <span className={styles.badge}>24/7</span>
              </p>
              <a href="mailto:help@landin.com" className={styles.infoText}>
                help [at] Landin.com
              </a>
            </div>
          </div>

          <div className={styles.infoBox_ctr}>
            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>
                <span>{phone}</span> Phone
              </p>
              <a href="tel:+17175501675" className={styles.infoText}>
                +1 (717) 550–1675
              </a>
            </div>
          </div>

          <div className={styles.infoBox_ctr}>
            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>
                <span>{location}</span> Address{" "}
                <span className={styles.badge}>REMOTE</span>
              </p>
              <a href="#" className={styles.infoText}>
                California [CA], 90011
                <br />
                49th St. Los Angeles
                <br />
                United States
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;