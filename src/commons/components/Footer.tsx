import { IconMail, IconMailFilled } from "@tabler/icons-react";
import React from "react";

export default function Footer() {
  return (
    <div className="rounded-xl bg-[#FBFBFB] py-5 px-6 mt-16">
      <div className="flex justify-between">
        <div className="text-black">
          <p className="font-bold text-[18px]">Contact</p>
          <p className="mt-3">Tema,Accra</p>
          <p>Accra,Ghana</p>
          <div className="flex">
            <IconMailFilled className="text-black mr-2"/>
            <p>johntetteh090@gmail.com</p>

          </div>
        </div>
      </div>
    </div>
  );
}
