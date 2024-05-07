import Image from "next/image";
// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-full font-inter">
      {/* text */}
      <div className="h-full w-full">
        <ParticlesContainer />
        <div className="text-center flex flex-col py-32 xl:text-left h-full container">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-primary">
            PANTI ASUHAN MUHAMMADIYAH SOKARAJA
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-primary">
            Lembaga Kesejahteraan Sosial Anak (LKSA) atau Amal Usaha
            Muhammadiyah (AUM) yang berada di bawah naungan Pimpinan Cabang
            Muhammadiyah Sokaraja
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            className="hidden xl:flex"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
