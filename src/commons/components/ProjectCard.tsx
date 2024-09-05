"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconEye, IconEyeFilled } from "@tabler/icons-react";
import ImagesModal from "./ImagesModal";
import Carousel from "./Carousel";

interface Props {
  appName: string;
  description: string;
  appLink: string;
  images: string[];
  modalVisible?: () => void;
  modalImages?: (data: string[]) => void;
}

export default function ProjectCard({
  appName,
  description,
  appLink,
  images,
  modalVisible,
  modalImages
}: Props) {
  
function handleClick(){
  if(modalVisible)
  modalVisible();
  if(modalImages)
  modalImages(images)
}
  return (
    <div className="relative">
      <div className="rounded-xl bg-white shadow-custom py-5 px-4 mb-6">
        <div className=" border border-[#D9D9D9] rounded-xl p-2 inline-block">
          <p className="font-light">Project</p>
        </div>

        <p className="font-bold text-[18px] mt-5">{appName}</p>
        <p className="text-[14px] text-black/60 mt-1 mb-2">{description}</p>

        <a
          href={appLink}
          target="_blank"
          className="btn mb-4 btn-sm w-full bg-secondary text-white"
        >
          Visit App
        </a>

        <div className="relative h-[150px] w-full rounded-xl">
          <Image
            src={images[0]}
            height={85}
            width={85}
            alt=""
            className="rounded-xl  h-[150px] w-full absolute object-cover"
          />

          <div className="relative group w-full h-full rounded-xl overflow-hidden cursor-pointer">
            <div className="hidden group-hover:block">
              <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                {/* <ImagesModal/> */}

                <div className="flex" onClick={handleClick}>
                  <IconEyeFilled className="text-white mr-2" />
                  <div className="text-white cursor-pointer hover:underline">
                    View More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Carousel/> */}

        {/* <div className="absolute z-10 bg-black/30 h-full w-full">
jhkjhbjlkhbjh
      </div> */}
      </div>
    </div>
  );
}
