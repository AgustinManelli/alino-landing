"use client";

import { AlinoLogo, Cafecito, Instagram } from "../ui/icons/icons";
import styles from "./footer.module.css";

export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerStripe}>
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
  );
}
