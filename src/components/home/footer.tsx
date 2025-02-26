"use client";

import { AlinoLogo, Cafecito, Instagram } from "../ui/icons/icons";
import Image from "next/image";
import img from "../../../public/images/alino-footer.webp";
import styles from "./footer.module.css";
import { Button } from "../ui/button";

export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerStripe}>
        <div className={styles.topText}>
          Comienza la experiencia Alino
          <Button
            text={"Comenzar"}
            textColor={"#1c1c1c"}
            backgroundColor={"rgb(255, 255, 255)"}
            href={"https://app.alino.online"}
          />
        </div>
        <Image
          src={img}
          alt="Alino, tu espacio para estar organizado."
          priority
          className={styles.img}
        />
        <div className={styles.footerEnd}>
          <AlinoLogo style={{ height: "25px", fill: "#fff" }} decoFill="#fff" />
          <div className={styles.socialMediaLinks}>
            <a href="https://www.instagram.com/alinoapp" target="_blank">
              <Instagram
                style={{ width: "auto", height: "20px", fill: "#fff" }}
              />
            </a>
            <a href="https://cafecito.app/alinoapp" target="_blank">
              <Cafecito
                style={{ width: "auto", height: "20px", fill: "#fff" }}
                back={"rgb(135, 24, 157)"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
