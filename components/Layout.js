// fonts
import { Inter } from "@next/font/google";
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

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-gradient-to-br from-blue-50 to-green-200 text-white ${inter.variable} relative`}>
      <div className="h-24">
        <Header />
      </div>
      <div className="h-[calc(100vh-6rem)]">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
