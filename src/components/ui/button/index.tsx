"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ArrowThin } from "../icons/icons";
import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  height?: number;
  href?: string;
  iconRight?: boolean;
  activeBorder?: boolean;
}

export function Button({
  text = "button text",
  textColor = "#fff",
  backgroundColor = "#1c1c1c",
  height = 35,
  href = "#",
  iconRight = true,
  activeBorder = false,
}: ButtonProps) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <AnimatePresence>
        {hover && (
          <motion.div
            className={styles.glow}
            initial={{ scale: 1, rotate: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.05, 0.95, 1],
              rotate: [0, 360],
              opacity: 1,
            }}
            exit={{ scale: 1, rotate: 0, opacity: 0 }}
            transition={{
              duration: 1,
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        )}
      </AnimatePresence>
      <div
        className={`${styles.buttonContainer} ${
          (hover || activeBorder) && styles.active
        }`}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <a
          className={styles.button}
          style={{
            height: `${height}px`,
            backgroundColor: backgroundColor,
          }}
          href={href}
        >
          <p style={{ color: textColor }}>{text}</p>
          <AnimatePresence>
            {hover && iconRight && (
              <motion.div
                layout
                initial={{ opacity: 0, width: 0, paddingLeft: "0px" }}
                animate={{ opacity: 1, width: 20, paddingLeft: "5px" }}
                exit={{ opacity: 0, width: 0, paddingLeft: "0px" }}
                className={styles.iconContainer}
              >
                <ArrowThin
                  style={{
                    width: "20px",
                    height: "auto",
                    stroke: textColor,
                    strokeWidth: "3",
                    transform: "rotate(-90deg)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      </div>
    </div>
  );
}
