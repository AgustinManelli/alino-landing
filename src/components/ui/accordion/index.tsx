import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./accordion.module.css";
import { ArrowThin } from "../icons/icons";

export interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <motion.button
            className={styles.accordionButton}
            onClick={() => toggleAccordion(index)}
            initial={false}
          >
            <span className={styles.accordionTitle}>{item.title}</span>
            <motion.div
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* <ChevronDown className={styles.accordionIcon} /> */}
              <div className={styles.accordionIcon}>
                <ArrowThin
                  style={{
                    width: "20px",
                    height: "auto",
                    strokeWidth: "2",
                  }}
                />
              </div>
            </motion.div>
          </motion.button>
          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
                className={styles.accordionContentContainer}
              >
                <div
                  className={styles.accordionContent}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
