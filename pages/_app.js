import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isNavBarAvailable = router.pathname !== "/sidenavigation";
  return (
    <>
      {isNavBarAvailable && <Navbar></Navbar>}
      <Component {...pageProps} />
    </>
  );
}
