import { ReactNode } from "react";
import  footerStyle from "../styles/Footer.module.css";

interface footerProps {
    children: ReactNode;
}

const Footer = ({children}: footerProps) => {
    return (
        <footer className={footerStyle.footer}>
            {children}
        </footer>
    )
}

export default Footer;
