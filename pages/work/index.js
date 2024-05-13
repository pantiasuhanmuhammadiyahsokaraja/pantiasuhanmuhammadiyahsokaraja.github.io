// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";

const Work = () => {
  return (
    <div className="font-poppins text-black">
      {/* Container */}
      <div className="container flex flex-col mx-auto mt-4">
        <div className="flex flex-col gap-4">
          {/* Bagian 1 */}
          <div className="flex flex-col bg-[#fefefe] p-5 rounded-md items-center">
            <h1 className="h2 text-center">
              DONASI REHAB GEDUNG PANTI ASUHAN MUHAMMADIYAH SOKARAJA
            </h1>
            {/* Image 1 */}
            <Image
              src={"/about/gambar 10.jpg"}
              width={400}
              height={400}
              alt=""
              className="rounded-xl"
            />
            <p className="pb-3">
              Panti Asuhan Muhammadiyah Sokaraja merupakan sebuah Lembaga
              Kesejahteraan Sosial Anak (LKSA) atau Amal Usaha Muhammadiyah
              (AUM) yang berada di bawah naungan Pimpinan Cabang Muhammadiyah
              Sokaraja.{" "}
            </p>
            <p className="pb-3">
              Saat ini, kami memiliki sepuluh anak asuh yang berasal dari
              berbagai wilayah di Kabupaten Banyumas dengan latar belakang
              keluarga yatim & dhuafa.
            </p>
            <p className="pb-3">
              Keseharian kami berjalan dengan memanfaatkan gedung lama yang
              kondisinya terbatas. Aktifitas tersebut meliputi makan, mandi,
              mencuci, belajar, diskusi dan berlatih kegiatan islami hingga
              beristirahat.
            </p>
          </div>
          {/* Bagian 2 */}
          <div className="flex flex-col bg-[#fefefe] p-5 rounded-md">
            {/* Image 2 */}
            <Image
              src={"/about/gambar 11.jpg"}
              width={400}
              height={400}
              alt=""
              className="rounded-xl"
            />
            <p className="pb-3">
              Kondisi panti dan ruang beraktifitas sangat sempit sehingga kurang
              layak untuk dijadikan tempat belajar. Minimnya fasilitas serta
              sarana dan prasarana yang tersedia dirasakan menghambat proses
              belajar sehingga mengulur waktu tercapainya tujuan utama
              pendidikan yaitu “Menciptakan Generasi Islami yang berakhlak mulia
              sesuai Al Qur’an dan sunnah Rasulullah Shallallhu’alahi wa
              Sallam”.{" "}
            </p>
            <div className="flex">
              {/* Image 3 */}
              <Image
                src={"/about/gambar 12.jpg"}
                width={400}
                height={400}
                alt=""
                className="rounded-xl flex flex-1"
              />
              {/* Image 4 */}
              <Image
                src={"/about/gambar 13.jpg"}
                width={400}
                height={400}
                alt=""
                className="rounded-xl flex flex-1"
              />
            </div>
            <p className="pb-3">
              Adapun bangunan kami terbagi menjadi 2 unit yang terdiri dari :
              ruang Sekretariat, Ruang Tamu, Ruang Aula/Serba Guna, Asrama
              Putri, Kamar Pengasuh, Kamar Mandi, Dapur, Space Olahraga, dan
              Tempat Parkir
            </p>
          </div>
          {/* Bagian 3 */}
          <div className="flex flex-col bg-[#fefefe] p-5 rounded-md">
            <p className="pb-3">
              Sedangkan Sarana Penunjang lainnya meliputi : Instalasi Listrik,
              Air PDAM, Air Sumur Pompa, 1 unit Komputer dan Printer, Almari
              Arsip & Dokumen, 1 unit kompor gas, Perlengkapan tempat tidur,
              Peralatan Dapur, Meja kursi tamu, Almari pakaian anak asuh,
              Sepeda, Kulkas, Mesin cuci, Setrika dan Perlengkapan kebersihan
            </p>
            <p className="pb-3">
              Diharapkan dengan pembangunan/rehab ini daya tampung anak dapat
              meningkat dan segera menjalankan fungsi panti asuhan sebagai
              tempat untuk tujuan kesejahteraan sosial umat.
            </p>
            <p className="pb-3">
              Adapun rencana anggaran biaya yang kami butuhkan sebesar Rp
              737.910.000,-
            </p>
          </div>
          <div className="m-10"></div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="h-full bg-gradient-to-br from-blue-50 to-green-100 py-36 flex items-center">
    //     <div className="container mx-auto">
    //       <div className="flex flex-col xl:flex-row gap-x-8">
    //         {/* text */}
    //         <div className="text-center flex flex-col xl:w-[30vw] lg:text-left mb-4 xl:mb-0">
    //           <motion.h2
    //             variants={fadeIn("up", 0.3)}
    //             initial="hidden"
    //             animate="show"
    //             exit="hidden"
    //             className="h2 xl:mt-8">
    //             My Work <span className="text-accent">.</span>
    //           </motion.h2>
    //           <motion.p
    //             variants={fadeIn("up", 0.3)}
    //             initial="hidden"
    //             animate="show"
    //             exit="hidden"
    //             className="mb-4 max-w-[400px] mx-auto lg:mx-0">
    //             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
    //             sunt labore excepturi perferendis possimus distinctio!
    //           </motion.p>
    //         </div>
    //         {/* slider */}
    //         <motion.div
    //           variants={fadeIn("down", 0.3)}
    //           initial="hidden"
    //           animate="show"
    //           exit="hidden"
    //           className="w-full xl:max-w-[65%]">
    //           <WorkSlider />
    //         </motion.div>
    //       </div>
    //     </div>
    //     <Bulb />
    //   </div>
    // </div>
  );
};

export default Work;
