import React from "react";
import navStyle from "../styles/NavStyles.module.css";
import NavSearchItem from "./NavSearchItem";

interface NavProps {
    list: string[]; // or list: Array<string>;
}

const NavBar = ({ list }: NavProps) => {
    return (
        <>
            <ul className={navStyle.navbar}>
                {list.map((item, index) => (
                    <li key={index} className={navStyle['nav-item']}>
                        <a className={navStyle['nav-link']} href={`#${item}`}>
                            {item}
                        </a>
                        <NavSearchItem ariaLabel="Search through site" />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NavBar;

