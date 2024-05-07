import Image from "next/image";
import Link from "next/link";
// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="mx-auto z-60 flex items-center justify-center w-full py-1 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* logo */}
          <Link
            href={"/"}
            className="flex items-center justify-center md:justify-start gap-x-1">
            <Image
              src={"/logo-panti.png"}
              width={100}
              height={100}
              alt=""
              priority={true}
              className="h-[70px] w-[70px]"
            />
            <h1 className="text-primary text-center justify-center text-xl uppercase font-bold leading-none rounded-md p-1 gap-y-[1px]">
              <span className="">Panti Asuhan</span> <br />{" "}
              <span className="">Muhammadiyah Sokaraja</span>
            </h1>
            <Image
              src={"/logo-muhammadiyah.png"}
              width={100}
              height={100}
              alt=""
              priority={true}
              className="h-[65px] w-[65px]"
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
