import Image from "next/image";
import styles from "./page.module.css";
import navbar_blur from "./../../public/images/navbar_blur.webp";
import Navbar from "@/components/home/navbar";
import { Header } from "@/components/home/header";
import { Cards } from "@/components/home/cards";
import Faq from "@/components/home/faq";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main style={{ overflow: "hidden", position: "relative" }}>
      <Image
        src={navbar_blur}
        alt=""
        priority
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minWidth: "720px",
          height: "auto",
          opacity: 0.5,
        }}
      />
      <Navbar />
      <Header />
      <Cards />
      {/* <AppInformation /> */}
      <Faq />
      <Footer />
    </main>
  );
}
