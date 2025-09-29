"use client";

import { AlinoLogo } from "@/components/ui/icons/icons";
import styles from "./navbar.module.css";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Mostrar navbar flotante después de 100px
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Ocultar navbar flotante cuando está cerca del top (menos de 50px)
      if (scrollPosition < 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <AlinoLogo
              style={{ height: "25px", fill: "#fff" }}
              decoFill="#fff"
            />
            <span>beta</span>
          </div>
          <div className={styles.supportButtonContainer}>
            <Button
              text={"Apoyá a Alino"}
              textColor={"#ffffff"}
              backgroundColor={"rgba(0,0,0,0.1)"}
              hoverColor={"rgba(0,0,0,0.15)"}
              href={"https://cafecito.app/alinoapp"}
              targetBlank={true}
              iconRight={false}
              effects={false}
            />
          </div>
          <Button
            text={"Comenzar"}
            textColor={"#ffffff"}
            backgroundColor={"rgba(0,0,0,0.1)"}
            href={"https://app.alino.online"}
          />
        </nav>
      </div>

      <div
        className={`${styles.floatingNavbarContainer} ${
          !hidden ? styles.floatingVisible : ""
        }`}
      >
        <div className={styles.navbarContainer}>
          <div className={styles.logoContainer}>
            <AlinoLogo style={{ height: "25px", overflow: "visible" }} />
            <span>beta</span>
          </div>
          <div className={styles.supportButtonContainer}>
            <Button
              text={"Apoyá a Alino"}
              textColor={"#1c1c1c"}
              backgroundColor={"rgba(0,0,0,0.04)"}
              hoverColor={"rgba(0,0,0,0.08)"}
              href={"https://cafecito.app/alinoapp"}
              targetBlank={true}
              iconRight={false}
              effects={false}
            />
          </div>
          <Button
            text={"Comenzar"}
            textColor={"#1c1c1c"}
            backgroundColor={"rgb(235, 235, 235)"}
            href={"https://app.alino.online"}
          />
        </div>
      </div>
    </>
  );
}
