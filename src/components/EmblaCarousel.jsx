import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import post_1 from "../assets/carousel/te-p-1.webp"
import post_2 from "../assets/carousel/te-p-2.webp"

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img className='embla__slide__img' src={post_1} alt="Course Ad 1" /></div>
        <div className="embla__slide"><img className='embla__slide__img' src={post_2} alt="Course Ad 2" /></div>
      </div>
    </div>
  )
}
