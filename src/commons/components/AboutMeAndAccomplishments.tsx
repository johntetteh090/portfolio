import React from "react";
import Image from "next/image";

export default function AboutMeAndAccomplishments() {
  return (
    <div className="rounded-xl bg-[#fbfbfb] py-5 px-16 mt-16">
      <p className="font-bold text-[20px]">About Me & Accomplishments</p>
      <p className="text-[#B0B0B0] text-sm">
        A little details on my software development journey
      </p>

      <div className="relative rounded-xl p-2 w-[100%] bg-white shadow-lg mt-12">
        <div className="w-[100%] h-[18rem] bg-[#DEE0F9]/10 rounded-xl">
          <Image
            src={"/images/cup2.png"}
            height={85}
            width={85}
            alt=""
            className={`rounded-xl object-contain h-[18rem] w-[100%]`}
          />
        </div>

        <div className="absolute h-[5rem] w-[5rem] border-[3px] border-[#E6E7FA] bg-transparent -top-5 -left-8 rotate-45 animate-rotate-360" />
        <div className="absolute h-[5rem] w-[5rem] border-[3px] border-[#E6E7FA] bg-transparent -bottom-5 -right-8 rotate-45 animate-rotate-360" />
      </div>

      <div className="text-black/60 mt-10">
      I am a dedicated and passionate software developer with over five
          years of professional experience in both mobile and web development.My expertise spans across Flutter,
          Next.js, allows me to create dynamic, responsive, and visually appealing applications.
        {/* <p>
          I am a dedicated and passionate software developer with over five
          years of professional experience
        </p>
        <p>
          in both mobile and web development.My expertise spans across Flutter,
          Next.js, allows me to create
        </p>
        <p>dynamic, responsive, and visually appealing applications.</p> */}
      </div>

      <div className="mt-7 text-black/60">
        <p className="font-bold text-[17px] text-black">Accomplishments</p>
        <p>
          - My team and I won the best user Interface award in a{" "}
          <span className="font-bold">Vodafone hackathon</span>. I played of a
          role of{" "}
        </p>
        <p>UI/UX designer alongside wih my other team members.</p>
        <p className="mt-3">
          - Implemented DevOps practices, including
          <span className="font-bold">CI/CD pipelines</span>,deploying to{" "}
          <span className="font-bold">firebase</span> using firebase{" "}
        </p>
        <p>
          distribution, which reduced deployment times by 50% and improved code
          quality.
        </p>

        <p className="mt-3">
          - Successfully developed and deployed multiple cross-platform mobile
          applications using Flutter,
        </p>
        <p>
          {" "}
          achieving{" "}
          <span className="font-bold">high user ratings and engagement</span>
          (KargoNet App,KargoNet Driver App).
        </p>

        <div className="flex justify-center mt-8 mb-8">
          <a
            href={"https://drive.google.com/file/d/1fBOfN-9l0a13PniECx_iyG_aWPtPJck2/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-secondary w-[35%] text-white rounded-3xl py-3 font-bold"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
}
