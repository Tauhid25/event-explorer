import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SuccessfulEvents = () => {
  return (
    <div className="bg-gray-100">
      <div className="text-center px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-14">
        <h2 className="text-2xl md:text-3xl font-bold">
          Successful <span className="text-pink-500">Events</span> That Inspired
          Our Community
        </h2>
        <p className="text-gray-700 mt-6 mb-8">
          Explore past events that brought people together, sparked creativity,
          and made a lasting impact across various local communities and
          interests.
        </p>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-2 md:p-4  lg:p-8 border border-gray-300">
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <img className="rounded-lg"
                src="https://i.ibb.co.com/BH6CvtBm/slider1.jpg"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg"
                src="https://i.ibb.co.com/hJWxqhTf/slider2.webp"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg"
                src="https://i.ibb.co.com/9k6T3zZ0/ob-1744133674.jpg"
                alt="Slide 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulEvents;
