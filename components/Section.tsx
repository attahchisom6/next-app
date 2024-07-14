import ReactNode from "react";
import sectionStyle from  "../styles/Section.module.css";
import { Interface } from "readline";

Interface sectionProps {
    text: string,
    children: ReactNode
}

const Section = {{text, children}}) => {
    return (
        <div className={sectionStyle}>
            <h2>{text</h2>
            {children}
        </div>
    )
}

export default Section;