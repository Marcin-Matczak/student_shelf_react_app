import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import { settings } from "../../data/dataStore";

function Header() {
  return (
    <header className={styles.component}>
      <Container>
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <Icon name={settings.headerIcon} />
          </Link>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="info" end>Info</NavLink>
            <NavLink to="about" end>About</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
