// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Carousel = ({ images }) => {
  SwiperCore.use([Autoplay])
  return (
    <>
      <div className="hidden lg:block">
        <Swiper
          // install Swiper modules
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          fadeEffect={{ crossFade: true }}
          modules={[EffectFade, Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          effect={"fade"}
          navigation
          pagination={{ clickable: true }}
        >
          {images.item.data.map((img) => {
            return (
              <SwiperSlide key={img.id}>
                {LazyImage(img.attributes)}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="block lg:hidden">
        <Swiper
          // install Swiper modules
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {images.item.data.map((img) => {
            return (
              <SwiperSlide key={img.id}>
                {LazyImage(img.attributes)}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default Carousel
