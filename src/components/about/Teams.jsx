import React from "react";
import styles from "../../styles/about/Teams.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";

import { Instagram, Linkedin, Github } from 'lucide-react';

import arinbagul from "../../assets/team/arinbagul-entangle-Photoroom.webp"
import baljeetsingh from "../../assets/team/baljeetsingh-entangle-Photoroom.webp"

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
            <img src={baljeetsingh} alt="Baljeet Singh" className={styles.member_img} />
            <div className={styles.member_info_ctr}>
                <div className={styles.member_info}>
                    <h3 className={styles.member_name}>Baljeet Singh</h3>
                    <p className={styles.member_role}>Founder & Chairman</p>
                </div>
                {/* <div className={styles.member_socials}> */}
                    {/* <a href=""><Instagram /></a> */}
                    {/* <a href=""><Linkedin size={22} /></a>
                    <a href=""><Github size={22}/></a>
                </div> */}
            </div>
          </div>
          <div className={styles.member_card}>
            <img src={arinbagul} alt="Arin Bagul" className={styles.member_img} />
            <div className={styles.member_info_ctr}>
                <div className={styles.member_info}>
                    <h3 className={styles.member_name}>Arin Bagul</h3>
                    <p className={styles.member_role}>Co-Founder | Trainer</p>
                </div>
                <div className={styles.member_socials}>
                    {/* <a href=""><Instagram /></a> */}
                    <a href="https://www.linkedin.com/in/arin-bagul/" target="_blank"><Linkedin size={22} /></a>
                    <a href="https://github.com/ArinBagul" target="_blank"><Github size={22}/></a>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Teams;
