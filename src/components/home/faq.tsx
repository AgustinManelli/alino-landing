"use client";

import { Accordion } from "@/components/ui/accordion";
import styles from "./faq.module.css";
export default function Faq() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Preguntas <span className={styles.highlight}>frecuentes</span>
          </h2>
          <p className={styles.subtitle}>¿Tienes dudas sobre Alino?</p>
        </div>
        <Accordion
          items={[
            {
              title: "¿Qué es Alino?",
              content:
                "Alino es una aplicación diseñada para organizar tus tareas en listas intuitivas, siguiendo el formato to-do. Te ayuda a gestionar tu tiempo con calendarios y horarios para mantener el control de tus tareas pendientes. Actualmente, sigue en una fase temprana de desarrollo.",
            },
            {
              title: "¿Alino es gratis?",
              content:
                "Sí, Alino es completamente gratuito. Si deseas apoyar su desarrollo y el mantenimiento de los servidores, puedes hacerlo a través de donaciones en <a href='https://cafecito.app/alinoapp' target='_blank'>Cafecito</a>. ¡Tu apoyo es invaluable, pero el simple hecho de que uses Alino ya significa mucho para nosotros!",
            },
            {
              title: "¿Necesito una cuenta?",
              content:
                "Sí, actualmente puedes usar la aplicación registrandote <a href='https://app.alino.online' target='_blank'>aquí</a> con una cuenta de google o github, aunque planeamos integrar un sistema de autentificación propio para que tu cuenta sea 100% personalizable.",
            },
            {
              title: "¿Puedo enviar feedback o reportar bugs?",
              content:
                "¡Por supuesto! Tu opinión es muy valiosa para mejorar Alino y adaptarlo mejor a las necesidades de los usuarios. Si encuentras un bug o tienes sugerencias, puedes enviarnos un mensaje a <a href='mailto:ayuda@alino.online'>ayuda@alino.online</a>. ¡Gracias por ayudarnos a crecer!",
            },
            {
              title: "¿Alino usa cookies?",
              content:
                "Sí, utilizamos cookies esenciales para el funcionamiento de la aplicación, como el inicio de sesión y la gestión de sesiones de usuario. Estas cookies son necesarias para garantizar una experiencia fluida y segura. No recopilamos información personal ni compartimos datos con terceros a través de estas cookies. Si deseas obtener más detalles, puedes contactarnos enviando un mensaje a <a href='mailto:ayuda@alino.online'>ayuda@alino.online</a>.",
            },
          ]}
        />
      </div>
    </section>
  );
}
