import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import "./scroll.css";
import { useAppDispatch } from "@slices/store";
import { useEffect } from "react";
import { fetchStories } from "@slices/storiesList.slice/storiesList.thunks";
import { useSelector } from "react-redux";
import { selectStoriesList } from "@selectors/storiesList.selectors";

export function SlideImages() {
   const stories = useSelector(selectStoriesList);

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchStories());
   }, [dispatch]);

   const divStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
            height: "264px",
            width: "1280px",
            paddingTop: "12px",
            display: "flex",
            alignItems: "end",
         }}
      >
         {stories.map((story, i) => (
            <SwiperSlide
               key={i}
               style={{
                  ...divStyle,
                  backgroundImage: `url(${story.picture})`,
                  backgroundSize: "cover",
               }}
            ></SwiperSlide>
         ))}
      </Swiper>
   );
}
