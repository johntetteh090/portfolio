import { IconEyeFilled, IconX } from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { List } from "postcss/lib/list";

interface Props{
  showImages:() => void;
  images: string[]
}

export default function ImagesModal({showImages,images}: Props) {
  return (
    <div>
      <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none h-[120vh] w-full" />
      <div className="absolute inset-0 z-20 w-full min-h-screen">
        <div className="flex justify-end mt-10">
          <button onClick={showImages}
          className="hover:bg-gray-50/10 rounded-full hidden lg:block ml-10 mr-[13rem] mb-6 py-2 px-2">
            <IconX stroke={1.5} size={30} className="text-black/50" />
          </button>
        </div>

        <Carousel images={images} />
      </div>
    </div>
  );
}
