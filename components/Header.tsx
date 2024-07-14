import  headerStyle from "../styles/HeaderStyle.module.css";

interface headerProps {
    text: string;
}

const Header = ({ text }: headerProps) => {
    return (
        <header className={headerStyle}>
            <h1>{text}</h1>
        </header>
    );
}

export default Header;