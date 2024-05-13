// fonts
import { Inter, Poppins, Roboto } from "@next/font/google";
// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Socials from "./Socials";

// font settings
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-gradient-to-b from-blue-50 to-red-100 text-white ${inter.variable} ${roboto.variable} ${poppins.variable} overflow-auto`}>
      <Header />
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
