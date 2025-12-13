import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import hero_banner from "../assets/courses/hero_banner.webp"

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd11xcHrZ4XAMUPLjWCGka7q9cLeGB02iAIbLbkcE65y8YNGQ/viewform"
          target="_blank"
          className="embla__slide"
        >
          <img className="embla__slide__img" src={hero_banner} alt="Course Ad 1" />{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd11xcHrZ4XAMUPLjWCGka7q9cLeGB02iAIbLbkcE65y8YNGQ/viewform"
            target="_blank"
            className="reg-btn"
          >
            Register Now
          </a>
        </a>

      </div>
    </div>
  );
}
