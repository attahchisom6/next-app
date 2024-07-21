import navStyle from "../styles/NavStyles.css"
import NavSearchItem from "."

interface navProps {
  list: [];
}

const NavBar = ({list}: navProps) => {
  return (
    <>
      <ul class={navStyle.navbar}>
        {list && list.map((item) => {
          <li class={navStyle.nav-item}>
            <a href={`#$item`}>item.toUppercase()</a>
          </li>
        })}
      </ul>
      <NavSearchItem text="search through site content" />
    </>
  )
}

export default NavBar
