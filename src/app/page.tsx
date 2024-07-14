import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full">

      <div>
      <div className="flex items-center justify-start ">
        <div className="h-2 w-2 bg-[#2BE868] rounded-full mr-2" />
        <p>Available for hire</p>
      </div>
      <div className="text-[4rem] font-bold">
        <p className=" ">Hey, I{"'"}m Johnny</p>
        <p className="">a <span className="text-[#B0B0B0]">Web and Mobile frontend </span></p>
        <p className="text-[#B0B0B0]">developer and</p>
      </div>
      </div>
     

      
    </main>
  );
}
