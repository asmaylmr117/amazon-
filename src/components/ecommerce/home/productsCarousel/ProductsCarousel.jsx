import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';



function ProductsCarousel ({img1, img2, img3, img4, img5, img6, img7 , img8, img9, img10, img11, img12}) {
    return (
      <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop = {true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {img1}
        </SwiperSlide>
        <SwiperSlide>
          {img2}
        </SwiperSlide>
        <SwiperSlide>
          {img3}
        </SwiperSlide>
        <SwiperSlide>
          {img4}
        </SwiperSlide>
        <SwiperSlide>
          {img5}
        </SwiperSlide>
        <SwiperSlide>
          {img6}
        </SwiperSlide>
        <SwiperSlide>
          {img7}
        </SwiperSlide>
        <SwiperSlide>
          {img8}
        </SwiperSlide>
        <SwiperSlide>
          {img9}
        </SwiperSlide>
        <SwiperSlide>
          {img10}
        </SwiperSlide>
        <SwiperSlide>
          {img11}
        </SwiperSlide>
        <SwiperSlide>
          {img12}
        </SwiperSlide>
        <SwiperSlide>
          {img12}
        </SwiperSlide>
      </Swiper>
    </>
    )
}

export default ProductsCarousel;
