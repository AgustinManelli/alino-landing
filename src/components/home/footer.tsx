"use client";

import { AlinoLogo, Cafecito, Heart, Instagram } from "../ui/icons/icons";
import Image from "next/image";
import img from "../../../public/images/alinofooter.png";
import { motion } from "motion/react";
import styles from "./footer.module.css";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerStripe}>
        <div className={styles.topText}>
          <div className={styles.textContainer}>
            <p className={styles.text}>Comienza la experiencia Alino</p>
            <p className={styles.desc}>
              Una forma simple y efectiva de gestionar tu día
            </p>
          </div>
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
          draggable={false}
        />
        <div className={styles.footerEnd}>
          <AlinoLogo style={{ height: "25px", fill: "#fff" }} decoFill="#fff" />
          <p className={styles.madeby}>
            made with{" "}
            <span>
              <Heart
                style={{
                  height: "14px",
                  fill: "#fff",
                  transform: "translateY(2px)",
                }}
              />
            </span>{" "}
            by Alino
          </p>
          <div className={styles.socialMediaLinks}>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/alinoapp"
              target="_blank"
            >
              <Instagram
                style={{ width: "auto", height: "20px", fill: "#fff" }}
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://cafecito.app/alinoapp"
              target="_blank"
            >
              <Cafecito
                style={{ width: "auto", height: "20px", fill: "#fff" }}
                back={"#450057"}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
