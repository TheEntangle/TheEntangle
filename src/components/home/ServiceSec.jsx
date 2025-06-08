import React from "react";
import styles from "../../styles/home/ServiceSec.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";
import cta_arrow from "../../assets/cta_arrow.svg";

import coding from "../../assets/icons/coding.png";
import conf from "../../assets/icons/conf.png";
import events from "../../assets/icons/events.png";
import pla from "../../assets/icons/pla.png";
import pro from "../../assets/icons/pro.png";
import projects from "../../assets/icons/projects.png";
import talks from "../../assets/icons/talks.png";
import training from "../../assets/icons/training.png";

function ServiceSec() {
  return (
    <section className={styles.services_section}>
      <div className={styles.services_section_div}>
        <div className={styles.head_ctr}>
          <div
            className={`${styles.element_details_ctr_left} ${styles.element_details_ctr}`}
          >
            <img
              className={`${styles.element_details_left_img} ${styles.element_details_img}`}
              src={element_details}
              alt=""
            />
          </div>
          <div className={styles.head_content_ctr}>
            <JellyTag title="Services" />
            <h1 className={styles.heading}>
              Ultimated Solutions for
              <br />
              <span>Growth and Innovation</span>
            </h1>

            <p className={styles.paragraph}>
              Empowering individuals and organizations through tailored
              training, tech, and development services.
            </p>
            <PrimaryBtn path="/" title="Explore services" />
          </div>
          <div
            className={`${styles.element_details_ctr_right} ${styles.element_details_ctr}`}
          >
            <img
              className={`${styles.element_details_right_img} ${styles.element_details_img}`}
              src={element_details}
              alt=""
            />
          </div>
        </div>
        <div className={styles.cards_ctr}>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={coding} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Design & Development</h4>
              <span className={styles.card_heading_2}>Creative Building</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                We craft innovative digital products tailored to real-world
                needs and user experiences.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={training} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Professional Training</h4>
              <span className={styles.card_heading_2}>Skill Enhancement</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Upskill with hands-on learning programs designed to boost your
                professional and technical capabilities.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={talks} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Motivational Talks</h4>
              <span className={styles.card_heading_2}>Mindset Shift</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Inspire personal growth and unlock inner potential through
                expert-led, empowering sessions.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={events} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Tech Events</h4>
              <span className={styles.card_heading_2}>Exposure</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Engage with latest tech trends, ideas, and peers through
                dynamic, interactive events.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={conf} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>
                Conferences & Symposiums
              </h4>
              <span className={styles.card_heading_2}>Thought Leadership</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Connect with experts, present ideas, and stay ahead with our
                impactful academic gatherings.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={projects} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>
                Skill Projects (Govt/MSME)
              </h4>
              <span className={styles.card_heading_2}>Career Growth</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Participate in industry-linked, government-backed projects
                focused on employability and future skills.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={pro} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Live Projects</h4>
              <span className={styles.card_heading_2}>Real-World Learning</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Work on live industry projects to gain practical knowledge and
                experience.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={pla} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Placement Assistance</h4>
              <span className={styles.card_heading_2}>Career Support</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                We connect talent to top companies through our dedicated
                placement support and partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSec;
