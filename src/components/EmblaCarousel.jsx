import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import post_1 from "../assets/carousel/mern_te_new.webp"
import post_2 from "../assets/carousel/web_dev_te.webp"
import post_3 from "../assets/carousel/cyber_security_te.webp"
import { Link } from 'react-router-dom'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img className='embla__slide__img' src={post_1} alt="Course Ad 1" /> <Link to="/course/registration/mern-stack" className='reg-btn' >Register Now</Link></div>

        <div className="embla__slide"><img className='embla__slide__img' src={post_2} alt="Course Ad 2" /> <Link to="/course/registration/web-dev-foundation" className='reg-btn' >Register Now</Link></div>

        <div className="embla__slide"><img className='embla__slide__img' src={post_3} alt="Course Ad 3" /> <Link to="/course/registration/cybersecurity-event" className='reg-btn' >Register Now</Link></div>
      </div>
    </div>
  )
}
