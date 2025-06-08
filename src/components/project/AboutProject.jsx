import React from "react";
import styles from "../../styles/project/AboutProject.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router-dom";

function AboutProject({ data }) {
  const { about,images } = data;

  return (
    <section className={styles.project_details_section}>
      <div className={styles.project_details_container}>
        {about &&
          about.length > 0 &&
          about.map((section, index) => (
            <div className={styles.project_details_content_ctr} key={index}>
              <h2 className={styles.heading}>{section.heading}</h2>
              <div className={styles.seperator}></div>
              <div className={styles.paragraph}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={materialDark}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    table: ({ node, ...props }) => (
                      <div className={styles.table_container}>
                        <table {...props} />
                      </div>
                    ),
                    img: ({ node, ...props }) => (
                      <img
                        {...props}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          display: "inline-block",
                        }}
                      />
                    ),
                  }}
                >
                  {section.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.project_images_ctr}>
        <div className={styles.image_scroller}>
          {images.map((imageUrl,index) => (
            <img
                  key={index}
                  src={imageUrl}
                  alt="Project Screenshot"
                  className={styles.project_image}
                />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
