/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Image from "next/image";

// about data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="text-black">
      {/* Container */}
      <div className="container flex flex-col p-4">
        {/* Text Container */}
        <div className="">
          {/* Bagian 1 */}
          <div className="">
            {/* Image 1 */}
            <Image />
            {/* Text 2 */}
            <h1 className="">Panti Asuhan Muhammadiyah Sokaraja</h1>
            <p className="text-black">
              Panti Asuhan Muhammadiyah Sokaraja merupakan sebuah Lembaga
              Kesejahteraan Sosial Anak (LKSA) atau Amal Usaha Muhammadiyah
              (AUM) yang berada di bawah naungan Pimpinan Cabang Muhammadiyah
              Sokaraja.
            </p>
          </div>
          {/* Bagian 2 */}
          <div></div>
        </div>
      </div>
    </div>
    // <div className="h-full font-inter py-32 text-center xl:text-left">
    //   {/* <Circles /> */}
    //   <motion.div
    //     variants={fadeIn("right", 0.2)}
    //     initial="hidden"
    //     animate="show"
    //     exit="hidden"
    //     className="hidden xl:flex absolute bottom-0 -left-[370px]">
    //     {/* <Avatar /> */}
    //   </motion.div>
    //   <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
    //     {/* text */}
    //     <div className="flex flex-1 flex-col justify-center">
    //       <motion.h2
    //         variants={fadeIn("right", 0.2)}
    //         initial="hidden"
    //         animate="show"
    //         exit="hidden"
    //         className="h2">
    //         Captivating <span className="text-accent">stories</span> birth
    //         magnificent designs.
    //       </motion.h2>
    //       <motion.p
    //         variants={fadeIn("right", 0.2)}
    //         initial="hidden"
    //         animate="show"
    //         exit="hidden"
    //         className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
    //         10 years ago, I began frelancing as a developer. Since then,
    //         I&apos;ve done remote work for agencies, counsulted for startups,
    //         and collaborated on digital products for busness and costumer use.
    //       </motion.p>
    //       {/* counters */}
    //       <motion.div
    //         variants={fadeIn("right", 0.4)}
    //         initial="hidden"
    //         animate="show"
    //         exit="hidden"
    //         className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
    //         <div className="flex flex-1 xl:gap-x-4">
    //           {/* experience */}
    //           <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
    //             <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
    //               <CountUp start={0} end={10} duration={10} /> +
    //             </div>
    //             <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
    //               Years of Experience
    //             </div>
    //           </div>
    //           {/* clients */}
    //           <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
    //             <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
    //               <CountUp start={0} end={250} duration={10} /> +
    //             </div>
    //             <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
    //               Clients
    //             </div>
    //           </div>
    //           {/* projects */}
    //           <div className="relative flex-1">
    //             <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
    //               <CountUp start={0} end={650} duration={10} /> +
    //             </div>
    //             <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
    //               Finished Project
    //             </div>
    //           </div>
    //         </div>
    //       </motion.div>
    //     </div>
    //     {/* contents info */}
    //     <motion.div
    //       variants={fadeIn("left", 0.4)}
    //       initial="hidden"
    //       animate="show"
    //       exit="hidden"
    //       className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
    //       <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
    //         {aboutData.map((item, itemIndex) => {
    //           return (
    //             <div
    //               key={itemIndex}
    //               className={`${
    //                 index === itemIndex &&
    //                 "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
    //               } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
    //               onClick={() => setIndex(itemIndex)}>
    //               {item.title}
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
    //         {aboutData[index].info.map((item, itemIndex) => {
    //           return (
    //             <div
    //               key={itemIndex}
    //               className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/50">
    //               {/* title */}
    //               <div className="font-light mb-2 md:mb-0">{item.title}</div>
    //               <div className="hidden md:flex">-</div>
    //               <div>{item.stage}</div>
    //               <div className="flex gap-x-4">
    //                 {/* icons */}
    //                 {item.icons?.map((icon, iconIndex) => {
    //                   return (
    //                     <div key={iconIndex} className="text-2xl text-white">
    //                       {icon}
    //                     </div>
    //                   );
    //                 })}
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default About;
