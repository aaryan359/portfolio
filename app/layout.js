import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import SideNavbar from "./components/SideNavbar";
import { personalData } from "@/utils/data/personal-data";

export const metadata = {
  title: "ARYAN MEENA",
  description: "This is the portfolio of ARYAN MEENA. A full stack developer and a self taught developer, love to learn new things and always open to collaborating with others. A quick learner and always looking for new challenges.",
  image: `${personalData.profile}`
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <main className="min-h-screen w-full md:w-[90%] lg:w-[80%] xl:w-[50%] relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}