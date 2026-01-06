import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MySlider() {
  return (
    <div style={{ width: "600px", margin: "40px auto" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div style={slideStyle}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const slideStyle = {
  height: "200px",
  background: "#22c55e",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  borderRadius: "8px",
};
