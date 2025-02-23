"use client";

import { useState } from "react";
import Link from "next/link";
import { ReactNode } from "react";

import styles from "./ButtonLink.module.css";

interface props {
  text?: string;
  background: string;
  hover: string;
  letterColor: string;
  to: string;
  strokeBorder?: boolean | null;
  children?: ReactNode;
  style?: React.CSSProperties;
  withLoader?: boolean;
}

export function ButtonLink({
  text,
  background,
  hover,
  letterColor,
  to,
  strokeBorder,
  children,
  style,
  withLoader,
}: props) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const inlineStyles = {
    backgroundColor: strokeBorder
      ? isHover === true
        ? `${background}`
        : "transparent"
      : isHover === true
      ? `${hover}`
      : `${background}`,
    color: strokeBorder
      ? isHover === true
        ? `${letterColor}`
        : `${background}`
      : `${letterColor}`,
    border: strokeBorder ? `solid ${background} 2px` : "none",
    fontWeight: strokeBorder ? "600" : "initial",
  };

  const combinedStyles = Object.assign({}, inlineStyles, style);

  return (
    <a
      href={`https://www.${to}`}
      className={styles.buttonContainer}
      style={combinedStyles}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className={styles.container} style={{ gap: text ? "7px" : 0 }}>
        {children && <div className={styles.iconContainer}>{children}</div>}
        <p>{text}</p>
      </div>
    </a>
  );
}
