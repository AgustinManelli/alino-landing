"use client";

import styles from "./header.module.css";
import { Button } from "@/components/ui/button";
import { Underline } from "@/components/ui/icons/icons";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.text}>
            <h1>
              Tu espacio para <br /> estar{" "}
              <span>
                organizado
                <Underline
                  style={{
                    position: "absolute",
                    bottom: "-5%",
                    right: "50%",
                    width: "70%",
                    zIndex: "+1",
                    fill: "#ffffff",
                    transform: "translateX(50%)",
                    opacity: "0.5",
                  }}
                />
              </span>
            </h1>
            <p>
              Mantén tus clases, tareas y proyectos en orden y al alcance de tu
              mano.
            </p>
          </div>
          <div className={styles.ctaButton}>
            <Button
              text={"Explora Alino ahora"}
              href={"https://app.alino.online"}
              height={40}
              iconRight={false}
              backgroundColor="rgb(69, 0, 87)"
              activeBorder
            />
          </div>
        </section>
      </div>
    </div>
  );
}
