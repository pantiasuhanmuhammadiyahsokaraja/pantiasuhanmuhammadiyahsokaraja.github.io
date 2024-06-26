import Image from "next/image";
// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="font-poppins overflow-hidden">
      {/* text */}
      <div className="h-full w-full">
        <ParticlesContainer />
        <div className="container text-center flex flex-col py-32 xl:text-left mx-auto xl:mt-28">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-primary leading-none">
            PANTI ASUHAN
            <br />
            MUHAMMADIYAH SOKARAJA
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
          <motion.div
            className="xl:flex"
            variants={fadeIn("up", 0.3)}
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
