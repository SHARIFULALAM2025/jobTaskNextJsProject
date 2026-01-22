"use client"
import Image from 'next/image';
import React from 'react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { carouselData } from './data';
const Carousel = () => {
    return (
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded  flex items-center justify-between relative p-5">
                <div className="absolute bottom-12">
                  <button
                    className="px-4 py-2 text-sm font-semibold rounded-lg
              bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    Bye Now
                  </button>
                </div>
                <div className="text-black space-y-2">
                  <h1 className="md:text-4xl font-bold">{item.title}</h1>
                  <h1 className="text-xl font-bold">{item.des}</h1>
                </div>
                <div className=" p-5">
                  <Image
                    src={item.image}
                    height={100}
                    width={300}
                    alt=""
                    className="mx-auto "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
};

export default Carousel;