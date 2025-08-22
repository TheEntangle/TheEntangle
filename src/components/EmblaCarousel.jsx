import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import post_1 from "../assets/courses/web_foundation.webp";
import post_2 from "../assets/courses/mern_stack.webp";
import post_3 from "../assets/courses/cpp_and_dsa.webp";
import post_4 from "../assets/courses/placement.webp";
import post_5 from "../assets/courses/english.webp";
import { Link } from "react-router-dom";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <Link
          to="/course/registration/web-dev-foundation"
          className="embla__slide"
        >
          <img className="embla__slide__img" src={post_1} alt="Course Ad 1" />{" "}
          <Link
            to="/course/registration/web-dev-foundation"
            className="reg-btn"
          >
            Register Now
          </Link>
        </Link>

        <Link to="/course/registration/mern-stack" className="embla__slide">
          <img className="embla__slide__img" src={post_2} alt="Course Ad 2" />{" "}
          <Link to="/course/registration/mern-stack" className="reg-btn">
            Register Now
          </Link>
        </Link>

        <Link to="/course/registration/cpp-and-dsa" className="embla__slide">
          <img className="embla__slide__img" src={post_3} alt="Course Ad 3" />{" "}
          <Link to="/course/registration/cpp-and-dsa" className="reg-btn">
            Register Now
          </Link>
        </Link>

        <Link to="/course/registration/placement-prep" className="embla__slide">
          <img className="embla__slide__img" src={post_4} alt="Course Ad 3" />{" "}
          <Link to="/course/registration/placement-prep" className="reg-btn">
            Register Now
          </Link>
        </Link>

        <Link
          to="/course/registration/english-for-professionals"
          className="embla__slide"
        >
          <img className="embla__slide__img" src={post_5} alt="Course Ad 3" />{" "}
          <Link
            to="/course/registration/english-for-professionals"
            className="reg-btn"
          >
            Register Now
          </Link>
        </Link>
      </div>
    </div>
  );
}
