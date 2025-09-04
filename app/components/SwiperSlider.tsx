"use client"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, EffectCoverflow, } from 'swiper/modules'

export default function SwiperSlider({ srcs }) {
    return (
        <div>
            <Swiper
                modules={[Autoplay, EffectCoverflow]}  // use from what functionalities
                spaceBetween={30}  // spacebetween slides
                slidesPerView={1}  // number of slides in a time or page
                loop={true}  // run at last to first
                centeredSlides={true}  // start from center
                effect={'coverflow'} // is mode of slider
                grabCursor={true}  // show hand on slides
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
            >
                {srcs.map((src, i) => (
                    <SwiperSlide>
                        <img key={i} src={src} alt={src} className="h-auto w-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}