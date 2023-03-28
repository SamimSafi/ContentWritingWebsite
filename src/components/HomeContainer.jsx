import React, { useRef } from "react";
import C1 from "../img/c1.png";
import C2 from "../img/c2.png";
import C3 from "../img/c3.png";
import C4 from "../img/c4.png";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Autoplay, Pagination, A11y, Navigation]);
const HomeContainer = () => {
  const swiperRef = useRef(null);
  return (
    <div className="w-full bg-blue-900 h-510" id="home">
      <div
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      >
        <Swiper
          // install Swiper modules
          ref={swiperRef}
          spaceBetween={50}
          autoplay={{
            disableOnInteraction: false,
            delay: 2500,
          }}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {" "}
            <img className="object-center  object-fill w-full h-510" src={C1} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="object-center object-fill w-full h-510" src={C2} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="object-center object-fill w-full h-510" src={C3} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="object-center object-fill w-full h-510" src={C4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeContainer;
