import { useGSAP } from "@gsap/react";
// import { rightImg, watchImg } from "../utils";
import gsap from "gsap";
import { Keyboard, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getToKnowList } from "../constants/index";

const GetToKnow = () => {
  useGSAP(() => {
    gsap.to("#knowTitle", { opacity: 1, delay: 1 });
  }, []);
  return (
    <section id="highlights" className="w-full  overflow-hidden pt-10 mb-8">
      <div className="flex-col common-padding">
        <div className="mb-8">
          <p
            id="knowTitle"
            className="font-semibold lg:text-5xl md:text-3xl text-2xl opacity-0 max-md:mb-0"
          >
            Get to Know iphone.
          </p>
        </div>
        <div className="">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            keyboard={{ enabled: true }}
            modules={[Pagination, Keyboard , Mousewheel]}
            allowTouchMove={false}
            mousewheel={true}
            className="mySwiper"
          >
            {getToKnowList.map((list, index) => (
              <SwiperSlide key={index} className="lg:w-1/4 md:w-1/3 sm:w-1/2">
                <div className=" rounded-3xl overflow-hidden relative">
                  <img
                    src={list.image}
                    alt="apple image"
                    className="w-full h-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <div
                    className="absolute z-10 text-white top-2 left-5"
                    style={{
                      color: index === 3 || index === 4 ? "black" : "white",
                    }}
                  >
                    <p className="font-medium">{list.heading1}</p>
                    <p className="font-semibold text-2xl">{list.heading2}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default GetToKnow;
