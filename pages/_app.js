import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isNavBarAvailable = router.pathname !== "/sidenavigation";
  const isFooterAvailable = router.pathname !== "/sidenavigation";
  return (
    <>
      {isNavBarAvailable && <Navbar />}
      <Component {...pageProps} />
      {isFooterAvailable && <Footer />}
    </>
  );
}
