import React, { useState } from "react";
import styles from "../styles/Faq.module.css";
import JellyTag from "./JellyTag";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is The Entangle?",
    answer:
      "The Entangle is a platform bridging talent and industry by offering skill-focused training, live projects, placement prep, corporate tie-ups, and research support.",
  },
  {
    question: "Who can join The Entangle’s programs?",
    answer:
      "Our programs are designed for undergrad/postgrad students, working professionals, startups, and corporates seeking skill enhancement.",
  },
  {
    question: "Are classes online or offline?",
    answer: "We conduct offline classes only.",
  },
  {
    question: "Do I need prior knowledge to join?",
    answer:
      "Not always! Some of our foundation courses start from scratch, while advanced ones require prior basics. Each course clearly mentions prerequisites.",
  },
  {
    question: "What kind of courses do you offer?",
    answer:
      "We provide technical skill-based courses (C, C++, Java, Web Development, DevOps, Cyber Security, etc.), placement training, and career-oriented bootcamps.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes! Our live and skill enhancement projects are designed to give you real-world industry experience.",
  },
  {
    question: "Do you provide placement support?",
    answer:
      "Absolutely. Through our career kickstart programs and corporate tie-ups, we guide students till placements.",
  },
  {
    question: "How are your programs different from typical coaching?",
    answer:
      "We focus on 20% theory, 80% practical, industry projects, and interview prep — not just syllabus teaching.",
  },
];

function Faq() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (i) => {
    setActiveCard(activeCard === i ? null : i);
  };

  return (
    <section className={styles.faq_section}>
      <div className={styles.left}>
        <div className={styles.heading_ctr}>
          <JellyTag title="FAQ" />
          <h2 className={styles.heading}>
            Frequently <br />
            <span>Asked Questions</span>
          </h2>
          <p className={styles.paragraph}>
            Have questions? Our FAQ section has you covered with quick answers
            to the most common inquiries.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.cards_ctr}>
          {faqs.map((faq, index) => (
            <div className={styles.card} key={index} style={{
                height: activeCard === index ? 'min-content' : '72px'
              }}
              onClick={() => toggleCard(index)}
>
              <div className={styles.card_header}>
                <h3 className={styles.card_heading}>{faq.question}</h3>
                <Plus style={{
                    transform: activeCard === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.5s ease'
                  }} size={28}
 />
              </div>
              <p className={styles.card_paragraph} style={{
                  opacity: activeCard === index ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
