import React from 'react'
import Image from "next/image";

interface Props{
    image:string;
    name:string;
    removeBar?:boolean
    width?:string;
    height?:string
}

export default function Skills({image,name,removeBar = false,width,height} : Props) {
  return (

    <div className='flex justify-center items-center'>
        <Image
          src={image}
          height={85}
          width={85}
          alt=""
          className={`rounded-xl  w-[32px] h-[32px] ${width} ${height} mr-4`}
        />
        <p>{name}</p>

        {
            !removeBar && <div className='w-0.5 h-5 bg-black/60 ml-8'/>
        }
        

       
    </div>

  )
}
