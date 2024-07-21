import navStyle from "../styles/NavStyle";

interface navSearchProps {
  text: string
}

const NavSearchItem = ({{text}: navSearchProps) => {
  return (
    <form className={styles.form-search}>
      <input
        type="search"
        name="q"
        id="search-input"
        placeholder="search..."
        aria-label={text}
      />
      <button class={navStyle.nav-button}>
        <svg viewbox="0 0 24 24" xlmns="http://www.w3.org/2000/svg">
          <title>search-icon</title>
          <path d="M-soke-search-icon-code">
        </svg>
      </button>
    </form>
  );
}

export default NavSeaechItem;
