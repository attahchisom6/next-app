import { ReactNode } from "react";
import sectionStyle from "../styles/Section.module.css";

interface SectionProps {
    text: string;
    children: ReactNode;
}

const Section = ({ text, children }: SectionProps) => {
    return (
        <section className={sectionStyle.section}>
            <h2>{text}</h2>
            {children}
        </section>
    );
}

export default Section;
