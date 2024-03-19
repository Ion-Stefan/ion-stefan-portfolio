import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import { useEffect } from "react";

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  // Smooth scroll function
  const smoothScrollTo = (hash) => {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Smooth scrolling behavior
      });
    }
  };

  // Update selected indicator on mouse enter
  useEffect(() => {
    setSelectedIndicator(href);
  }, [href, setSelectedIndicator]);

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor tag behavior
          smoothScrollTo(href); // Smooth scroll to target section
        }}
        href={href}
      >
        <div className="hover:text-[#F22E2E]">{title}</div>
      </Link>
    </motion.div>
  );
}
