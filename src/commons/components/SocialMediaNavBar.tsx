"use client";

import React, { useState } from "react";
import {
  IconBell,
  IconChevronDown,
  IconMenuDeep,
  IconX,
  IconLayout,
  IconBriefcase,
  IconSchool,
  IconNotification,
  IconLayoutDashboardFilled,
  IconCode,
  IconUser,
  IconMail,
  IconBrandX,
  IconBrandDribbble,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";



const SocialMedialNavBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { push } = useRouter();

  const selectedStyle = "h-10 w-10 rounded-full bg-black p-2";

  const navItemStyle =
    "flex lg:flex-col py-3 lg:py-2 rounded-lg cursor-pointer text-[13px] items-start justify-start lg:items-center lg:justify-center mx-5 lg:mx-0";


  return (
    <div
    className={`flex flex-col  justify-center items-center w-full  sticky top-0 z-50 ${open && "h-screen"
      }  shrink-0 transition-all duration-300 bg-gradient-to-b bg-purple-blue px-5 md:px-7 md:pt-10 md:pb-7 text-white font-normal`}
    >
      
     

      <div className="flex flex-col h-full rounded-full py-8 px-3 w-16 mt-20  shadow-custom">
        <div className="space-y-3 w-full">
          <div
            onClick={() => setOpen(false)}
            className={`${navItemStyle}`}
          >

            <IconBrandX className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0"/>

            
          </div>

          {/* for desktop */}

          <div className="hidden lg:block">
            <div
              className={`${navItemStyle}`}
            >
              <IconBrandDribbble className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0" />{" "}
              
            </div>
          </div>

          {/* for mobile */}
          <div
           
            className={` lg:hidden flex lg:flex-col py-3 lg:py-2  rounded-lg cursor-pointer text-[15px] items-start justify-between lg:items-center lg:justify-center mx-5 lg:mx-0`}
          >
            <div className="flex">
              {/* <Student size={20} className="mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0" />{" "} */}
              Student
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedialNavBar;
