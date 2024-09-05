// components/Carousel.js

'use client'
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconChevronLeft, IconCircleArrowLeft, IconCircleChevronLeft } from "@tabler/icons-react";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    horizontal: true,
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

    <div className=" flex  h-full w-full  items-center">
    <button onClick={handlePrev} className="hover:bg-gray-50/10 rounded-full p-2 hidden lg:block">
      <IconCircleChevronLeft stroke={1.5} size={40} className="text-[#EE6B15] mr-6 ml-10 " />
    </button>

    <div className="w-[80%] h-[80%] bg-red-500">
    <Slider {...settings} ref={carouselRef} className="rounded-xl">

    <Image
           src="/images/school_website/image1.png"
          alt="image"
          width={100}
          height={100}
          className="rounded-tl-xl rounded-tr-xl h-full w-full object-fill"
        />
     
     <Image
           src="/images/school_website/image2.png"
          alt="image"
          width={100}
          height={100}
          className="rounded-tl-xl rounded-tr-xl h-full w-full"
        />
         {/* <Image
          src="/images/ecoville/ecoville2.png"
          height={85}
          width={85}
          alt="fdgjfhg"
          className="rounded-xl w-full object-cover"
        />  */}
         {/* <Image
          src={"/images/school_website/image3.png"}
          height={85}
          width={85}
          alt=""
          className="rounded-xl w-full object-cover"
        />  */}
      {/* Add more slides as needed */}
    </Slider>
    </div>

    <button onClick={handleNext} className="hover:bg-gray-50/10 rounded-full p-2 hidden lg:block">
      <IconCircleChevronLeft stroke={1.5} size={40} className="text-[#EE6B15] mr-6 ml-10 " />
    </button>
    
  </div>

    
 
  );
};

export default Carousel;
