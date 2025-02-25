"use client";

import { ButtonLink } from "@/components/ui/button-link";

import styles from "./header.module.css";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.text}>
            <h1>Tu espacio para estar organizado</h1>
            <p>
              Mantén tus clases, tareas y proyectos en orden y al alcance de tu
              mano.
            </p>
          </div>
          <div className={styles.ctaButton}>
            <Button
              text={"Pruébalo ahora"}
              href={"https://app.alino.online"}
              height={40}
              iconRight={false}
              activeBorder
            />
          </div>
        </section>
      </div>
    </div>
  );
}
