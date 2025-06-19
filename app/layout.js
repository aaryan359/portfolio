// app/layout.js or app/layout.tsx

import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

export const metadata = {
  title: "Aaryan Meena – Freelance Web & App Developer",
  description:
    "Hire Aaryan Meena, a full-stack freelance developer for stunning websites and powerful mobile apps. Expert in React, Node.js, Next.js, and modern web technologies.",
  keywords:
    "freelance web developer, hire app developer, React developer India, Next.js expert, frontend backend developer, portfolio website, build a website, hire developer online, custom website development, full stack freelancer",
  openGraph: {
    title: "Aaryan Meena – Freelance Web & App Developer",
    description:
      "Looking for a freelance developer? I design, build, and deploy modern websites and mobile apps using Next.js, React, Node.js and more.",
    url: "https://aaryanm.netlify.app/", 
    siteName: "Aaryan Meena",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Aaryan Meena Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Aaryan Meena" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="/logo.jpeg" />
                <link rel="icon" href="/logo.jpeg" />

        <link rel="canonical" href="https://aaryanm.netlify.app/" />

       
        <meta
          name="keywords"
          content="freelance web developer, hire app developer, React developer India, Next.js expert, portfolio website developer"
        />

        {/* Favicon */}
        <link rel="icon" href="/logo.jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" sizes="180x180" />
        <link rel="icon" type="image/png" href="/logo.jpeg" sizes="32x32" />
        <link rel="icon" type="image/png" href="/logo.jpeg" sizes="16x16" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* OG for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aaryan Meena – Freelance Web & App Developer" />
        <meta
          property="og:description"
          content="Need a custom website or app? Hire Aaryan Meena for professional development using React, Next.js, Node.js and more."
        />
        <meta property="og:image" content="/logo.jpeg" />
        <meta property="og:url" content="https://aaryanm.netlify.app/" />
        <meta property="og:site_name" content="Aaryan Meena" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aaryan Meena – Web & App Developer" />
        <meta
          name="twitter:description"
          content="Freelance full-stack developer offering custom website & app development services."
        />
        <meta name="twitter:image" content="/logo.jpeg" />
      </head>

      <body>
        <ToastContainer />
        <main className="min-h-screen w-full md:w-[90%] lg:w-[80%] xl:w-[50%] relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-white">
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </main>
        
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
