import AboutMyself from "@/commons/components/AboutMyself";
import Projects from "@/commons/components/Projects";
import SocialsBtns from "@/commons/components/SocialsBtns";
import ToolsAndSkills from "@/commons/components/ToolsAndSkills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full mb-6">

      <div>
      <section id="main-content">
      <div className="flex items-center justify-start ">
        <div className="h-2 w-2 bg-[#2BE868] rounded-full mr-2" />
        <p>Available for hire</p>
      </div>
      <div className="text-[4rem] font-bold">
        <p>Hey, I{"'"}m John Kennedy</p>
        <p>Martey Tetteh a <span className="text-[#B0B0B0]">Web and</span></p>
        <p className=""> <span className="text-[#B0B0B0]">Mobile frontend developer,</span></p>
        <p className="text-[#B0B0B0]"> UI/UX designer and Dev Ops </p>

        
        <div className="flex items-center">
        <div className="text-[#B0B0B0]"> engineer</div>
        <div className="h-3 w-3 rounded-full bg-[#d9d9d9] mt-7"></div>
        </div>
        
      </div>
      <SocialsBtns/>
      <AboutMyself/>
      </section>

      <div className="mt-10 h-0.5 bg-[#d9d9d9] rounded-full"/>

      <section id="feed">
      <Projects/>
      </section>

      <section id="tools&skills">
        <ToolsAndSkills/>
      </section>

     
      </div>

     
     

      
    </main>
  );
}
