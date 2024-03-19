import React from "react";
import { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";

const navItems = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Index() {
  const [selectedIndicator, setSelectedIndicator] = useState("");

  useEffect(() => {
    // Set selectedIndicator based on the hash fragment in the URL
    const handleHashChange = () => {
      setSelectedIndicator(window.location.hash.slice(1));
    };

    // Call handleHashChange initially to set the selectedIndicator
    handleHashChange();

    // Listen for hash changes in the URL
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(window.location.hash.slice(1));
          }}
          className={styles.nav}
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                className={styles.link}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
