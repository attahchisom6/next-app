import { Children, ReactNode } from "react";
import  footerStyle from "../styles/Footer.module.css";
import { Chicle } from "next/font/google";

interface footerProps {
    children: ReactNode;
}

const Footer = ({children}: footerProps) => {
    return (
        <footer className={footerStyle}>
            {children}
        </footer>
    )
}

export default Footer;