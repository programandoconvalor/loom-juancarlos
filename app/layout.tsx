import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./css/card.scss";
import "./css/globals.scss";

import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import { LanguageProvider } from "./context/language-context";
import ScrollToWhatsapp from "./components/helper/scroll-to-whatsapp";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan Carlos Zepeda IA | Senior Full-Stack Developer",
  description:
    "Portfolio profesional de Juan Carlos Zepeda IA, Senior Full-Stack Developer especializado en React, Next.js, UI moderna e integración de IA.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  const gtmId = process.env.NEXT_PUBLIC_GTM;

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
          />

          <main className="relative mx-auto min-h-screen px-6 text-white sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>

          <Footer />
        </LanguageProvider>
        <ScrollToWhatsapp />

        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      </body>
    </html>
  );
}