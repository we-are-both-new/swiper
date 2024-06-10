import "./App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import ImgList from "./data/imgList";

function App() {
  return (
    <>
      <section>
        <Swiper
          modules={[FreeMode, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {ImgList.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.url} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default App;
