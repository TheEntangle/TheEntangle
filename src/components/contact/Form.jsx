import React from "react";
import styles from "../../styles/conatct/Form.module.css";
import { email, phone, location } from "../../assets/contact_icons";

function Form() {
  return (
    <section className={styles.form_section}>
      <div className={styles.container}>
        {/* Left Side - Contact Form */}
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="first-name">
                  First name*
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="Jane"
                  className={styles.input}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="last-name">
                  Last Name*
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Smith"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">
                How can we reach you?*
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@framer.com"
                className={styles.input}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="country">
                  Where are you from?*
                </label>
                <select className={styles.select} id="country">
                  <option>Select your country...</option>
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="service">
                  What’s the type of your company?*
                </label>
                <select className={styles.select} id="service">
                  <option>Select Category</option>
                </select>
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="message">
                Message*
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message..."
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Now
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className={styles.contactInfo}>
          <div className={styles.infoBox_ctr}>
            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>
                <span>{email}</span> Email{" "}
                <span className={styles.badge}>24/7</span>
              </p>
              <a href="#" className={styles.infoText}>
                help [at] Landin.com
              </a>
            </div>
          </div>

          <div className={styles.infoBox_ctr}>
            <div className={styles.infoBox}>
              <p className={styles.infoTitle}>
                <span>{phone}</span> Phone
              </p>
              <a href="#" className={styles.infoText}>
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
