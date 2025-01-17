
import React from "react";
import navStyle from "../styles/NavStyles.module.css";

interface NavSearchProps {
    ariaLabel: string;
}

const NavSearchItem = ({ ariaLabel }: NavSearchProps) => {
    return (
        <form className={navStyle['form-search']}>
            <input
                type="search"
                name="q"
                id="search-input"
                placeholder="Search..."
                aria-label={ariaLabel}
            />
            <button className={navStyle['search-button']}>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" className={navStyle['search-icon']}>
                    <title>Search icon</title>
                    <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                </svg>
            </button>
        </form>
    );
}

export default NavSearchItem;
