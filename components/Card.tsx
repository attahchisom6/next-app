import { ReactNode } from "react";
import cardStyle from "../styles/Card.module.css";

interface cardProps {
    children: ReactNode;
}

const Card = ({children}: cardProps) => {
    return (
        <div className={cardStyle.card}>
            {children}
        </div>
    );
}

export default Card;
