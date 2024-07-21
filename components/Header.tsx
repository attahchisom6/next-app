import  headerStyle from "../styles/HeaderStyle.module.css";

interface headerProps {
    theme: string;
}

const ids = ["hero", "services", "works", "about",  "vlog", "testimonials", "contact"];

const Header = ({theme}: headerProps) => {
  return (
    <div className="container">
      <header className={headerStyle.header} data-section-theme={theme}>
        <div class={headerStyle.header-logo}>
          <img src="../public/favour-cac-logo.jpg">
        </div>
        <input className={headerStyle.menu-button} id={menu-btn}>
        <label className={headerStyle.menu-icon} htmlFor={menu-btn}>
          <span className={headerStyle.navicon></span>
          </label>
          <NavBar list={ids} />
      </header>
    </div>
  );
}

export default Header;
