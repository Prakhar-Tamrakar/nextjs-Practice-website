"use client";

import navLinks from "@/constants/constants";
import Link from "next/link";
import React from "react";
import styles from "./navber.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo} >lamamia</Link>
      <div className={styles.links}>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {" "}
            {link.title}
          </Link>
        ))}

        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
