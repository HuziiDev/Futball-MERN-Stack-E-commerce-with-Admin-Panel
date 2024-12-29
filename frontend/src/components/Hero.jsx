import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" flex flex-col border border-gray-600">
      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-gray-600 flex flex-col sm:flex-row items-center">
            {/* Slide Left Side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
              <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                  <p className="w-8 md:w-11 h-[2px] bg-slate-400"></p>
                  <p className="font-medium text-sm md:text-base text-slate-800">
                    OUR BESTSELLERS
                  </p>
                </div>
                <h1 className="text-3xl sm:py-3 text-slate-400 lg:text-5xl leading-relaxed prata-regular">
                  Latest Arrivals
                </h1>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm md:text-base text-slate-800">
                    SHOP NOW
                  </p>
                  <p className="w-8 md:w-11 h-[2px] bg-slate-400"></p>
                </div>
              </div>
            </div>
            {/* Slide Right Side */}
            <img
              src={assets.hero_img}
              alt="Hero Image"
              className="w-full sm:w-1/2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-600 flex flex-col sm:flex-row items-center">
            {/* Slide Left Side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
              <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                  <p className="w-8 md:w-11 h-[2px] bg-slate-400"></p>
                  <p className="font-medium text-sm md:text-base text-slate-800">
                    OUR BESTSELLERS
                  </p>
                </div>
                <h1 className="text-3xl sm:py-3 text-slate-400 lg:text-5xl leading-relaxed prata-regular">
                  Latest Arrivals
                </h1>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm md:text-base text-slate-800">
                    SHOP NOW
                  </p>
                  <p className="w-8 md:w-11 h-[2px] bg-slate-400"></p>
                </div>
              </div>
            </div>
            {/* Slide Right Side */}
            <img
              src={assets.hero_img}
              alt="Hero Image"
              className="w-full sm:w-1/2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-600 flex flex-col sm:flex-row items-center">
            {/* Slide Left Side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
              <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                  <p className="w-8 md:w-11 h-[2px] bg-slate-400"></p>
                  <p className="font-medium text-sm md:text-base text-slate-800">
                    OUR BESTSELLERS
                  </p>
                </div>
                <h1 className="text-3xl sm:py-3 text-slate-400 lg:text-5xl leading-relaxed prata-regular">
                  Latest Arrivals
                </h1>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm md:text-base text-slate-800">
                    SHOP NOW
                  </p>
                  <p className="w-8 md:w-11 h-[2px] bg-slate-400"></p>
                </div>
              </div>
            </div>
            {/* Slide Right Side */}
            <img
              src={assets.hero_img}
              alt="Hero Image"
              className="w-full sm:w-1/2"
            />
          </div>
        </SwiperSlide>
       
       
       

        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Hero;
