"use client";

import { AlinoLogo, UserIcon } from "@/components/ui/icons/icons";
import { ButtonLink } from "@/components/ui/button-link";
import styles from "./navbar.module.css";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <AlinoLogo style={{ height: "35px" }} />
        <Button
          text={"Comenzar"}
          textColor={"#1c1c1c"}
          backgroundColor={"rgb(235, 235, 235)"}
          href={"https://app.alino.online"}
        />
      </nav>
    </div>
  );
}
