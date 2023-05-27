import React from "react";
import FoodCard from "../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                  items.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }

            </div>

        

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
