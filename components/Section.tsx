import {ReactNode} from "react";
import sectionStyle from  "../styles/Section.module.css";
import { Interface } from "readline";

interface sectionProps {
    text: string;
    children: ReactNode;
}

const Section = {{text, children}: sectionProps) => {
    return (
        <section className={sectionStyle}>
            <h2>{text</h2>
            {children}
        </section>
    )
}

export default Section;