import React from "react";
import styles from "../../styles/about/Teams.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";

import { Instagram, Linkedin, Github } from 'lucide-react';

function Teams() {
  return (
    <section className={styles.team_section}>
      <div className={styles.team_section_div}>
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
            <JellyTag title="Team Members" />
            <h1 className={styles.heading}>
              Meet the Team Making <br />
              <span>Things Happen Every Day</span>
            </h1>

            <p className={styles.paragraph}>
              Our team is made up of passionate professionals who bring their
              expertise and creativity to every project.
            </p>
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

        <div className={styles.team_members}>
          {/* Team member cards would go here */}
          <div className={styles.member_card}>
            <img src="https://framerusercontent.com/images/rHxsAzXev548yAFd2uMYmcDgvFI.jpeg?scale-down-to=2048" alt="" className={styles.member_img} />
            <div className={styles.member_info_ctr}>
                <div className={styles.member_info}>
                    <h3 className={styles.member_name}>Arin Bagul</h3>
                    <p className={styles.member_role}>Co-Founder</p>
                </div>
                <div className={styles.member_socials}>
                    {/* <a href=""><Instagram /></a> */}
                    <a href=""><Linkedin size={22} /></a>
                    <a href=""><Github size={22}/></a>
                </div>
            </div>
          </div>
          <div className={styles.member_card}>
            <img src="https://framerusercontent.com/images/rHxsAzXev548yAFd2uMYmcDgvFI.jpeg?scale-down-to=2048" alt="" className={styles.member_img} />
            <div className={styles.member_info_ctr}>
                <div className={styles.member_info}>
                    <h3 className={styles.member_name}>Arin Bagul</h3>
                    <p className={styles.member_role}>Founder & CEO</p>
                </div>
                <div className={styles.member_socials}>
                    {/* <a href=""><Instagram /></a> */}
                    <a href=""><Linkedin size={22} /></a>
                    <a href=""><Github size={22}/></a>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Teams;
