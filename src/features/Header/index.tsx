import React from "react";

import styles from "./styles.module.scss"

import Logo from "@assets/Logo/logo.svg"

export const Header = () => {
  return (
    <>
        <header className={styles.header_mob}>
            <div className="mt-6 flex w-full items-center justify-between">
                <a href="/">
                    <img src={Logo.src} alt="" className={styles.logo} />
                </a>
            </div>
        </header>
    </>
  )
}

