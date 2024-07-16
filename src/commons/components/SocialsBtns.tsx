import {
  IconBrandBehance,
  IconBrandDribbble,
  IconBrandTwitter,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import React from "react";

export default function SocialsBtns() {
  return (
    <div className="flex justify-start items-start mt-5 space-x-8">
      <button className="flex rounded-3xl px-7 py-2 text-black text-bold text-sm items-center shadow-custom">
        <IconMail stroke={1.5} className="text-black mr-2" />
        Email
      </button>
      <button className="flex rounded-3xl px-7 py-2 text-black text-bold text-sm items-center shadow-custom">
        <IconBrandX stroke={1.5} className="text-black mr-2" />
        Twitter
      </button>
      <button className="flex rounded-3xl px-7 py-2 text-black text-bold text-sm items-center shadow-custom">
        <IconBrandDribbble stroke={1.5} className="text-black mr-2" />
        Dribble
      </button>
      <button className="flex rounded-3xl px-7 py-2 text-black text-bold text-sm items-center shadow-custom">
        <IconBrandBehance stroke={1.5} className="text-black mr-2" />
        Behance
      </button>
    </div>
  );
}
