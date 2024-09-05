import { IconEyeFilled } from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";

export default function ImagesModal() {
  return (
    <div>
      <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none" />
      <div className="absolute inset-0 z-20 w-full h-full">
      <Carousel/>
      {/* <Image
           src="/images/school_website/image1.png"
          alt="image"
          width={100}
          height={100}
          className="rounded-tl-xl rounded-tr-xl h-[45rem] w-[200px]"
        /> */}
      </div>
     
    </div>
  );
}
