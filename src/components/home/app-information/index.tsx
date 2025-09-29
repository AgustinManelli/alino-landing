"use client";

import Image from "next/image";
import folders from "@/../public/images/folders.webp";
import lists from "@/../public/images/lists.webp";
import widgets from "@/../public/images/widgets.webp";
import sharedLists from "@/../public/images/shared-lists.webp";
import notifications from "@/../public/images/notifications.webp";
import presentation from "@/../public/images/presentation.webp";
import styles from "./AppInformation.module.css";

export function AppInformation() {
  return (
    <div className={styles.container}>
      <section className={styles.containerSection}>
        <div className={styles.header}>
          <h2>
            Hecho para <span className={styles.highlight}>simplificar</span>
          </h2>
          <p className={styles.subtitle}>
            Organiza tu vida con herramientas diseñadas para la productividad
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1 - Hero */}
          <div
            className={`${styles.card} ${styles.cardWide} ${styles.cardImgFull}`}
          >
            {/* <div className={styles.gradientBorder} /> */}
            <div className={styles.cardContent}>
              <Image
                src={presentation}
                alt="Listas"
                priority
                className={styles.cardImageFull}
                draggable={false}
              />
              {/* <div className={styles.textContainer}>
                <p>Rápida, simple y</p>
                <span>efectiva</span>
              </div> */}
            </div>
          </div>

          {/* Card 2 - Listas */}
          <div className={`${styles.card} ${styles.cardMedium}`}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <Image
                  src={lists}
                  alt="Listas"
                  priority
                  className={styles.cardImage}
                  draggable={false}
                />
              </div>
            </div>
            <div className={styles.textContainer}>
              <p>Listas</p>
            </div>
          </div>

          {/* Card 3 - Carpetas */}
          <div className={`${styles.card} ${styles.cardMedium}`}>
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <Image
                  src={folders}
                  alt="Carpetas"
                  priority
                  className={styles.cardImage}
                  draggable={false}
                />
              </div>
            </div>
            <div className={styles.textContainer}>
              <p>Carpetas</p>
            </div>
          </div>

          {/* Card 4 - Widgets */}
          <div
            className={`${styles.card} ${styles.cardMedium} ${styles.cardImgFull}`}
          >
            <div className={styles.cardContent}>
              <Image
                src={widgets}
                alt="Widgets"
                priority
                className={styles.cardImageFull}
                draggable={false}
              />
            </div>
            <div className={styles.textContainer}>
              <p>Widgets</p>
            </div>
          </div>

          {/* Card 5 - Compartidas */}
          <div
            className={`${styles.card} ${styles.cardWide} ${styles.cardImgFull}`}
          >
            <div className={styles.cardContent}>
              <Image
                src={sharedLists}
                alt="Listas"
                priority
                className={styles.cardImageFull}
                draggable={false}
              />
            </div>
            <div className={styles.textContainer}>
              <p>Listas</p>
              <span>compartidas</span>
            </div>
          </div>

          {/* Card 6 - Notificaciones */}
          <div
            className={`${styles.card} ${styles.cardSmall} ${styles.cardImgFull}`}
          >
            <div className={styles.cardContent}>
              <Image
                src={notifications}
                alt="Listas"
                priority
                className={styles.cardImageFull}
                draggable={false}
              />
            </div>
            <div className={styles.textContainer}>
              <p>Notificaciones</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
