import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle heading={"Fashion, Fun and More"}></SectionTitle>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
        <img src="https://i.ibb.co/92xP36V/image.png" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/jZbT9D3/image.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/YDtrmvn/image.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/NFQpPqm/image.png" alt="" /></SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default Category;
