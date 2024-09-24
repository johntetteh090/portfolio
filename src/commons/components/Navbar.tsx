// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   IconBell,
//   IconChevronDown,
//   IconMenuDeep,
//   IconX,
//   IconLayout,
//   IconBriefcase,
//   IconSchool,
//   IconNotification,
//   IconLayoutDashboardFilled,
//   IconCode,
//   IconUser,
//   IconMail,
//   IconBrandX,
//   IconBrandDribbble,
// } from "@tabler/icons-react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// import Image from "next/image";



// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [openStudentNav, setOpenStudentNav] = useState(false);
//   const [openAcademicNav, setOpenAcademicNav] = useState(false);
//   const pathname = usePathname();
//   const { push } = useRouter();

//   const selectedStyle = "h-10 w-10 rounded-full bg-black p-2";

//   const navItemStyle =
//     "flex lg:flex-col py-3 lg:py-2 rounded-lg cursor-pointer text-[13px] items-start justify-start lg:items-center lg:justify-center mx-5 lg:mx-0";

//   const handlemobileNavClick = () => {
//     setOpenStudentNav(!openStudentNav);
//   };

//   const handleAcademicNavClick = () => {
//     setOpenAcademicNav(!openStudentNav);
//   };

//   const [activeSection, setActiveSection] = useState('main-content');

  

//   return (
//     <div
//     className={`flex flex-col  justify-center items-center w-full  sticky top-0 z-50 ${open && "h-screen"
//       }  shrink-0 transition-all duration-300 px-5 md:px-7 md:pt-10 text-white font-normal`}
//     >
      
//       {/* <div className="lg:hidden flex justify-between items-center text-white mt-3 px-5">
//         <div className="flex justify-center items-center">
//           <Image
//             src={"/images/avatar.png"}
//             alt={"/images/avatar.png"}
//             height={35}
//             width={35}
//             className=" w-[35px] h-[35px] rounded-lg object-cover"
//           />

//           <div className="relative">
//             <IconBell stroke={1.3} size={28} className="text-white ml-3" />
//             <div className="absolute w-2 h-2 bg-[#8C45B8] rounded-full top-0 right-1.5"></div>
//           </div>
//         </div>
//         <AnimatePresence mode="wait" initial={false}>
//           {open ? (
//             <motion.div
//               key="close"
//               onClick={() => setOpen(false)}
//               transition={{ duration: 0.08 }}
//               initial={{ opacity: 1, bottom: 15 }}
//               animate={{ opacity: 1, bottom: 0 }}
//               exit={{ opacity: 0, bottom: 15 }}
//               className="relative"
//             >
//               <IconX size={25} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="open"
//               onClick={() => setOpen(true)}
//               transition={{ duration: 0.08 }}
//               initial={{ opacity: 1, bottom: -15 }}
//               animate={{ opacity: 1, bottom: 0 }}
//               exit={{ opacity: 0, bottom: -15 }}
//               className="relative"
//             >
//               <IconMenuDeep size={28} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div> */}

//       <div className="flex flex-col h-full rounded-full py-8 px-3 w-16 shadow-custom">
//         <div className="space-y-3 text-nav-inactive-text-color w-full">
//           <a
//           href="#main-content"
//             onClick={() => setOpen(false)}
//             className={` ${selectedStyle}
//              `}
//           >

//             <IconLayoutDashboardFilled className="mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0 text-white"/>

            
//           </a>

//           {/* for desktop */}

//           <div className="hidden lg:block">
//             <a
//               href="#feed"
//               className={`${navItemStyle} ${activeSection === 'feed' && selectedStyle}`}
//             >
//               <IconCode className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0" />{" "}
              
//             </a>
//           </div>

//           {/* for mobile */}
//           <div
//             onClick={() => handlemobileNavClick()}
//             className={` lg:hidden flex lg:flex-col py-3 lg:py-2  rounded-lg cursor-pointer text-[15px] items-start justify-between lg:items-center lg:justify-center mx-5 lg:mx-0`}
//           >
//             <div className="flex">
//               {/* <Student size={20} className="mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0" />{" "} */}
//               Student
//             </div>
//             <span
//               className={`ml-2 transform transition-transform ${
//                 openStudentNav ? "rotate-180" : "rotate-0"
//               }`}
//             >
//               <IconChevronDown size={20} className="text-white" />
//             </span>
//           </div>

          

//           <a
//           href="#section3"
//             onClick={() => setOpen(false)}
//             className={`${
//               activeSection === 'section3' && selectedStyle
//             } ${navItemStyle}`}
//           >
//             <IconUser className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0" />{" "}
           
//           </a>

          

//           <div
//             onClick={() => setOpen(false)}
//             className={`${
//               pathname.includes("discounts") && selectedStyle
//             } ${navItemStyle}`}
//           >
//             <IconMail className=" text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0"
//             />{" "}
           
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col h-full rounded-full py-8 px-3 w-16 mt-20  shadow-custom">
//         <div className="space-y-3 w-full">
//           <div
//             onClick={() => setOpen(false)}
//             className={`${navItemStyle}`}
//           >

//             <IconBrandX className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0"/>

            
//           </div>

//           {/* for desktop */}

//           <div className="hidden lg:block">
//             <div
//               className={`${navItemStyle}`}
//             >
//               <IconBrandDribbble className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0" />{" "}
              
//             </div>
//           </div>

//           {/* for mobile */}
//           <div
           
//             className={` lg:hidden flex lg:flex-col py-3 lg:py-2  rounded-lg cursor-pointer text-[15px] items-start justify-between lg:items-center lg:justify-center mx-5 lg:mx-0`}
//           >
//             <div className="flex">
//               {/* <Student size={20} className="mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0" />{" "} */}
//               Student
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


'use client'
import React, { useState } from 'react';
import {
  IconLayoutDashboardFilled,
  IconCode,
  IconUser,
  IconMail,
  IconBrandX,
  IconBrandDribbble,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useIntersectionObserver from '../hooks/useIntersectionObserver';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { push } = useRouter();
  const [activeSection, setActiveSection] = useState('main-content');

  useIntersectionObserver(setActiveSection); // Use custom hook

  console.log("here is the " + activeSection);

  
  const selectedStyle = "h-10 w-10 rounded-full bg-black p-2";
  const navItemStyle = "flex lg:flex-col py-3 lg:py-2 rounded-full cursor-pointer text-[13px] items-start justify-start lg:items-center lg:justify-center mx-5 lg:mx-0";
  const iconUnfocusProp = "text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0";
  const iconFocusProp = "text-white mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0";


  return (
    <div className={`flex flex-col justify-center items-center w-full sticky top-0 z-50 ${open && "h-screen"} shrink-0 transition-all duration-300 px-5 
    md:px-7 md:pt-10 text-white font-normal`}>
      <div className="flex flex-col h-full rounded-full py-8 px-3 w-16 shadow-custom">
        <div className="space-y-3 text-nav-inactive-text-color w-full">
          <a href="#main-content" onClick={() => setOpen(false)} className={`${navItemStyle} ${activeSection === 'main-content' && selectedStyle}`}>
            {
              activeSection === 'main-content' ?
              <IconLayoutDashboardFilled className={`${iconFocusProp}`}/> :
              <IconLayoutDashboard className={`${iconUnfocusProp}`}/>
            }
           
          </a>
         
            <a href="#feed" 
            onClick={() => setActiveSection('feed')}
            className={`${navItemStyle} ${activeSection == 'feed' && selectedStyle}`}>
              {
                activeSection === 'feed' ? 
                <IconCode className={`${iconFocusProp}`} /> :
                <IconCode className={`${iconUnfocusProp}`} />
              }
              
            </a>
          
        
          <a href="#aboutMe" onClick={() => setOpen(false)} className={`${activeSection === 'aboutMe' && selectedStyle} ${navItemStyle}`}>
          {
                activeSection === 'aboutMe' ? 
                <IconUser className={`${iconFocusProp}`} /> :
                <IconUser className={`${iconUnfocusProp}`} />
              }
                        </a>
          <a href="#footer" onClick={() => setOpen(false)} className={`${activeSection === 'footer' && selectedStyle} ${navItemStyle}`}>
            {/* <IconMail className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0"/> */}
            
            {
                activeSection === 'footer' ? 
                <IconMail  className={`${iconFocusProp}`} /> :
                <IconMail  className={`${iconUnfocusProp}`} />
              }
          </a>
        </div>
      </div>
      <div className="flex flex-col h-full rounded-full py-8 px-3 w-16 mt-20 shadow-custom">
        <div className="space-y-3 w-full">
          <div onClick={() => setOpen(false)} className={`${navItemStyle}`}>
            <IconBrandX className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0"/>
          </div>
          <div className="hidden lg:block">
            <div className={`${navItemStyle}`}>
              <IconBrandDribbble className="text-black mb-1 mr-3 ml-2 lg:ml-0 lg:mr-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




