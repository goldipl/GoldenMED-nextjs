import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import favicon from "./../../../public/favicon.ico";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  // Scroll to the anchor after navigating to links like /kontakt/#formularz
  useEffect(() => {
    const scrollToHash = (url: string) => {
      const hash = url.split("#")[1];
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    };

    router.events.on("routeChangeComplete", scrollToHash);
    return () => {
      router.events.off("routeChangeComplete", scrollToHash);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} />
        <link rel="apple-touch-icon" href={favicon.src} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
