import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/conatct/Form.module.css";
import { BadgeCheck } from "lucide-react";
import js from "@eslint/js";

function Form() {
  const form = useRef();
  const { id } = useParams();

  const courseOptions = [
    "dsa",
    "web-dev-foundation",
    "mern-stack",
    "cybersecurity-event"
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    course: courseOptions.includes(id) ? id : "",
    college: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    const fieldMap = {
      "first-name": "firstName",
      "last-name": "lastName",
      mobileNumber: "mobileNumber",
      email: "email",
      courses: "course",
      college: "college",
      message: "message"
    };

    setFormData({
      ...formData,
      [fieldMap[id]]: value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ submitting: true, submitted: false, error: null });

  const webAppUrl = "https://script.google.com/macros/s/AKfycbxYbZ1kQFnHBpfXdhEaYRCPri334QFNq1VuJ7a3KbWV5UGvqmkQR_r1lm5ottK5M9__/exec"; // your Web App URL

  console.log("Submitting form with data:", JSON.stringify(formData));
  try {
    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    
    if (result.result === "success") {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        course: "",
        college: "",
        message: ""
      });
    } else {
      throw new Error(result.error || "Unknown error");
    }
  } catch (err) {
    setFormStatus({
      submitting: false,
      submitted: false,
      error: "Something went wrong. Please try again."
    });
  }
};

  return (
    <section className={styles.form_section}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          {formStatus.submitted ? (
            <div className={styles.successMessage}>
              <BadgeCheck className={styles.checkIcon} />
              <h3 className={styles.sm_heading}>Registration Successful!</h3>
              <p className={styles.sm_paragraph}>
                We've received your registration and will get back to you shortly.
              </p>
              <button
                className={styles.submitButton}
                onClick={() =>
                  setFormStatus({ submitting: false, submitted: false, error: null })
                }
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={form} className={styles.form} onSubmit={handleSubmit}>
              {formStatus.error && (
                <div className={styles.errorMessage}>{formStatus.error}</div>
              )}
              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="first-name" className={styles.label}>
                    First name*
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Tony"
                    className={styles.input}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="last-name" className={styles.label}>
                    Last name*
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Stark"
                    className={styles.input}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="mobileNumber" className={styles.label}>
                    Wanna share your Phone no?*
                  </label>
                  <input
                    id="mobileNumber"
                    placeholder="Phone no."
                    className={styles.input}
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="email" className={styles.label}>
                    How can we reach you?*
                  </label>
                  <input
                    id="email"
                    placeholder="Email address"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="courses" className={styles.label}>
                  Which course you want to enroll?*
                </label>
                <select
                  id="courses"
                  className={`${styles.input}`}
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" className="form-option">Select a course</option>
                  <option value="dsa" className="form-option">DSA with C++</option>
                  <option value="web-dev-foundation" className="form-option">
                    Web Development Foundation (HTML, CSS, JS)
                  </option>
                  <option value="mern-stack" className="form-option">
                    MERN Stack Web Development (MongoDB, Express, React, Node)
                  </option>
                  <option value="cybersecurity-event" className="form-option">
                    Cybersecurity Event/Meet-up powered by ZenVoyager
                  </option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="college" className={styles.label}>
                  Where do you study / studied?*
                </label>
                <input
                  id="college"
                  type="text"
                  placeholder="College or university name"
                  className={styles.input}
                  value={formData.college}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="message" className={styles.label}>
                  Do you have any query?*
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="I want to know..."
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
      </div>
    </section>
  );
}

export default Form;
