"use client";

import styles from "./AppInformation.module.css";

export function AppInformation() {
  return (
    <div className={styles.container}>
      <section className={styles.containerSection}>
        <h2>Hecho para simplificar</h2>
        <div className={styles.bentoGrid}>
          <div className={`${styles.card} ${styles.cn1}`}>
            <div className={styles.textContainer}>
              <p>Rápida, simple y</p>
              <span>efectiva</span>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cn2}`}>
            <div className={styles.textContainer}>
              <p>Listas</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cn3}`}>
            <div className={styles.textContainer}>
              <p>Carpetas</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cn4}`}>
            <div className={styles.textContainer}>
              <p>Widgets</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cn5}`}>
            <div className={styles.textContainer}>
              <p>Listas</p>
              <span>compartidas</span>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cn6}`}>
            <div className={styles.textContainer}>
              <p>Notificaciones</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
