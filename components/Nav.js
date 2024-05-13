// icons
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiMiniHeart,
  HiMiniIdentification,
  HiMiniHomeModern,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiMiniHomeModern /> },
  { name: "tentang", path: "/tentang", icon: <HiMiniIdentification /> },
  { name: "donasi", path: "/donasi", icon: <HiMiniHeart /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const handleClick = (event, linkPath) => {
    event.preventDefault(); // Prevent default navigation

    // Navigate to the new page and then scroll to top:
    router.push(linkPath).then(() => window.scrollTo(0, 0));
  };

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="rounded-full flex w-full xl:flex-col items-center justify-around xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-primary backdrop-blur-sm text-3xl xl:text-xl">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-active"
              } relative flex items-center group hover:text-active transition-all duration-300`}
              href={link.path}
              key={index}
              onClick={(e) => handleClick(e, link.path)}>
              {/* Tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* Icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
