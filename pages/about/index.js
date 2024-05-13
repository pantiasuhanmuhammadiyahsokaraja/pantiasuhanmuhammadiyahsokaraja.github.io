/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// components
import AboutSlider from "../../components/AboutSlider";
import Image from "next/image";

const About = () => {
  return (
    <div className="font-poppins text-black flex flex-col items-center justify-center w-full ">
      {/* Container */}
      <div className="container flex flex-col mt-4">
        {/* Text Container */}
        <div className="flex flex-col gap-4">
          {/* Bagian 1 */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col xl:flex-row bg-[#fefefe] shadow-sm rounded-md p-5 items-center">
            {/* Image 1 */}
            <Image
              src={"/about/gambar 1.jpg"}
              width={400}
              height={400}
              alt=""
              className="m-3 rounded-xl"
            />
            {/* Text 2 */}
            <div className="xl:m-3">
              <h1 className="h2 text-center">
                Panti Asuhan Muhammadiyah Sokaraja
              </h1>
              <p className="pb-3">
                Panti Asuhan Kami berdiri pada 14 November 2004 sebagai bentuk
                tanggungjawab kepada negara serta mengamalkan Pancasila dan UUD
                1945 yaitu memelihara dan mensejahterakan masyarakat.
              </p>
              <p className="pb-3">
                Saat ini, kami memiliki sepuluh anak asuh yang berasal dari
                beberapa wilayah di kabupaten banyumas dengan latar belakang
                keluarga yatim & dhuafa.
              </p>
              <p className="pb-3">
                Anak asuh kami menjalani pendidikan di beberapa jenjang mulai
                dari SMP, SMA dan mahasiswa.
              </p>
            </div>
          </motion.div>
          {/* Bagian 2 */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col bg-[#fefefe] shadow-sm rounded-md p-5 gap-y-4">
            <div className="mt-5">
              <AboutSlider />
            </div>
            <div className="flex flex-col xl:mt-10">
              <p className="pb-3">
                Menjadikan Panti Asuhan Muhammadiyah Sokaraja sebagai Lembaga
                pelayanan sosial yang mandiri dan professional bagi anak yatim
                dan dhuafa, guna mewujudkan masa depan mereka sebagai insan
                teladan, bekerja dan berpendidikan adalah visi kami
              </p>
              <p className="pb-3">
                Selain mengikuti pendidikan formal, anak asuh kami juga
                mengikuti pendidikan non formal seperti pengajian al quran dan
                tahfidzul quran
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col bg-[#fefefe] shadow-sm rounded-md p-5 gap-y-4">
            <h1 className="h2">Hubungi Kami</h1>
            <p>
              No/Akte Notaris : 525
              <br />
              No/SK Kemenham RI : C2-HT.01.03.A.165
              <br />
              No. Register LKS 330200212019
              <br />
              No. NPWP : 85.008.981.4-521.000
            </p>
          </motion.div>
          <div className="m-10"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
