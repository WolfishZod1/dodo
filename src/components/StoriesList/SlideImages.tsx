import logo1 from "@assets/img/logo-1.png";
import logo2 from "@assets/img/logo-2.png";
import logo3 from "@assets/img/logo-3.png";
import logo4 from "@assets/img/logo-4.png";
import logo5 from "@assets/img/logo-5.png";
import logo6 from "@assets/img/logo-6.png";
import logo7 from "@assets/img/logo-7.png";
import logo8 from "@assets/img/logo-8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import "./scroll.css";

export function SlideImages() {
   const divStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      height: "248px",
      width: "197.19px",
      borderRadius: "17px",
   };

   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, FreeMode]}
         spaceBetween={6}
         slidesPerView={6.33}
         navigation={true}
         style={{
            height: "254px",
            width: "1280px",
            paddingTop: "12px",
            display: "flex",
            alignItems: "end",
         }}
      >
         <SwiperSlide style={{ ...divStyle, backgroundImage: `url(${logo1})` }}></SwiperSlide>
         <SwiperSlide style={{ ...divStyle, backgroundImage: `url(${logo2})` }}></SwiperSlide>
         <SwiperSlide style={{ ...divStyle, backgroundImage: `url(${logo3})` }}></SwiperSlide>
         <SwiperSlide style={{ ...divStyle, backgroundImage: `url(${logo4})` }}></SwiperSlide>
         <SwiperSlide style={{ ...divStyle, backgroundImage: `url(${logo5})` }}></SwiperSlide>
         <SwiperSlide style={{ ...divStyle, backgroundImage: `url(${logo6})` }}></SwiperSlide>
         <SwiperSlide style={{ ...divStyle, backgroundImage: `url(${logo7})` }}></SwiperSlide>
         <SwiperSlide style={{ ...divStyle, backgroundImage: `url(${logo8})` }}></SwiperSlide>
      </Swiper>
   );
}
