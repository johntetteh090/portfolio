// components/Carousel.js

"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCircleArrowLeft,
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from "@tabler/icons-react";
import Image from "next/image";
import * as Avatar from "@radix-ui/react-avatar";

interface Props {
  images: string[];
}

const Carousel = ({ images }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    horizontal: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselRef = useRef<Slider>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  };
  return (
    <div className=" flex h-[80%] w-full">
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={handlePrev}
          className="hover:bg-gray-50/10 rounded-full hidden lg:block ml-10 mr-10 py-2 px-2"
        >
          <IconChevronLeft stroke={1.5} size={60} className="text-black/50" />
        </button>
      </div>

      <div className="w-[80%] h-[80%] bg-red-500">
        <Slider {...settings} ref={carouselRef} className="rounded-xl">
          {images.map((image, index) => (
            <Avatar.Root key={index}>
              <Avatar.Image
                key={index}
                src={image}
                alt="hero"
                className={`rounded-xl w-full h-[80vh] object-contain`}
              />

              <Avatar.Fallback
                key={index}
                className=" w-full h-full bg-black/60 animate-pulse "
              ></Avatar.Fallback>
            </Avatar.Root>
            
          ))}

          {/* Add more slides as needed */}
        </Slider>
      </div>

      <div className="flex felx-col justify-center items-center">
        <button
          onClick={handleNext}
          className="hover:bg-gray-50/10 rounded-full hidden lg:block ml-10 py-2 px-2"
        >
          <IconChevronRight
            stroke={1.5}
            size={60}
            className="text-black/50  "
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
