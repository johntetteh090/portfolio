"use client";

import {
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCopyright,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import React from "react";
import handleEmailClick from "../hooks/EmailHook";
import Link from "next/link";
import TextInput from "./TextInput";
import FooterForm from "./FooterForm";

interface FooterProps {
  feedRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  aboutMeRef: React.RefObject<HTMLElement>;
}

export default function Footer({
  feedRef,
  skillsRef,
  aboutMeRef,
}: FooterProps) {
  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="rounded-xl bg-[#FBFBFB] py-5 px-10 mt-16">
      <div className="flex justify-between">
        <div className="text-black">
          <p className="font-bold text-[18px]">Contact</p>
          <div className="space-y-2">
            <p className="mt-3">Tema,Accra</p>
            <p>Accra,Ghana</p>
            <div className="flex" onClick={handleEmailClick}>
              <IconMailFilled className="text-black mr-2 " />
              <p className="underline cursor-pointer">
                johntetteh090@gmail.com
              </p>
            </div>
            <div className="flex">
              <IconPhoneFilled size={20} className="text-black mr-2" />
              <a href="tel:+233558520500" className="underline cursor-pointer">
                +233 558520500
              </a>
            </div>
          </div>
        </div>

        <div className="text-black">
          <p className="font-bold text-[18px]">Useful Links</p>
          <div className="space-y-2 underline cursor-pointer">
            <p className="mt-3" onClick={() => scrollToSection(feedRef)}>
              Projects
            </p>

            <p onClick={() => scrollToSection(skillsRef)}>Skills</p>

            <p onClick={() => scrollToSection(aboutMeRef)}>Curricullum Vitae</p>
            <p>Contacts</p>
          </div>
        </div>
      </div>

      <FooterForm/>

      <div className="mt-10 h-0.5 w-full bg-[#B0B0B0]" />

      <div className="flex mt-10 justify-between">
        <div>
          <div className="flex space-x-6">
            <p>Privacy Policy </p>
            <p>Terms of use</p>
          </div>

          <div className="flex space-x-2 mt-6">
            <IconCopyright />
            <p>Copyrights. All rights reserved.</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="rounded-full  bg-black h-7 w-7 hover:h-8 hover:w-8 flex justify-center items-center cursor-pointer">
            <IconBrandX size={18} className="text-white" />
          </div>
          <div className="rounded-full  bg-black h-7 w-7 hover:h-8 hover:w-8 flex justify-center items-center cursor-pointer">
            <IconBrandInstagram size={18} className="text-white" />
          </div>
          <div className="rounded-full  bg-black h-7 w-7 hover:h-8 hover:w-8 flex justify-center items-center cursor-pointer">
            <IconBrandLinkedin size={18} className="text-white" />
          </div>

          <div className="rounded-full  bg-black h-7 w-7 hover:h-8 hover:w-8 flex justify-center items-center cursor-pointer">
            <IconBrandDribbble size={18} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
