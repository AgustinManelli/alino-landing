"use client";

import { StorageAnimation } from "./storage-animation";
import Image from "next/image";
import minimalism from "../../../../public/images/tile-resource.webp";
import responsivedesign from "../../../../public/images/responsive-design.webp";

import styles from "./Cards.module.css";

export function Cards() {
  return (
    <section className={styles.container}>
      <div className={styles.containerLimit}>
        <div className={styles.header}>
          <h2>Más que una simple app</h2>
          <p className={styles.subtitle}>
            Hecha para acompañarte todos los días
          </p>
        </div>
        <article className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.cardLeft}`}>
            <div className={styles.cardContent}>
              <div className={styles.infoContainer}>
                <h2>Diseño minimalista e intuitivo</h2>
                <p>
                  Alino ofrece una experiencia agradable para todos los usuarios
                </p>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={minimalism}
                  alt="Diseño multiplataforma"
                  priority
                  className={styles.img}
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.infoContainer}>
                <h2>Almacenamiento de tareas en la nube</h2>
                <p>
                  Toda tu información se encuentra guardada y protegida en la
                  nube
                </p>
              </div>
              <div className={styles.imgContainer}>
                <StorageAnimation />
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardRight}`}>
            <div className={styles.cardContent}>
              <div className={styles.infoContainer}>
                <h2>Diseño Multiplataforma</h2>
                <p>Diseño amigable con todo tipo de dispositivos</p>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={responsivedesign}
                  alt="Diseño multiplataforma"
                  priority
                  className={styles.img}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
