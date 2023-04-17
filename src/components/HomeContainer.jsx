import React, { useEffect, useRef, useState } from "react";
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
import { baseUrl } from "../adminPanel/Constaints/baseUrl";
import axios from "axios";

SwiperCore.use([Autoplay, Pagination, A11y, Navigation]);
const HomeContainer = () => {
  const [slider, setSlider] = useState([]);

  const loadSlider = () => {
    axios
      .get(baseUrl + '/getSlider')
      .then((res) => setSlider(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadSlider();
  }, []);

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
          {
            slider && slider.map((res)=>(
          <SwiperSlide>
            <img className="object-center  object-fill w-full h-510" src={baseUrl + '/' + res.image} alt={res.title} />
          </SwiperSlide>
            ))
          }
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeContainer;
