
import React from "react";
import headerStyle from "../styles/HeaderStyle.module.css";
import styles from "../styles/globals.module.css";
import navStyle from "../styles/NavStyles.module.css";
import NavBar from "./NavBar"; // Import NavBar component

interface HeaderProps {
    theme: string;
}

const ids = ["hero", "services", "works", "about", "vlog", "testimonials", "contact"];

const Header = ({ theme }: HeaderProps) => {
    return (
        <div className={styles.container}>
            <header className={headerStyle.header} data-section-theme={theme}>
                <div className={headerStyle["header-logo"]}>
                    <img src="/favour-cac-logo.jpg" alt="favours-org" />
                </div>
                <input className={headerStyle["menu-button"]} id="menu-btn" type="checkbox" />
                <label className={headerStyle["menu-icon"]} htmlFor="menu-btn">
                    <span className={navStyle.navicon}></span>
                </label>
                <NavBar list={ids} />
            </header>
        </div>
    );
}

export default Header;
