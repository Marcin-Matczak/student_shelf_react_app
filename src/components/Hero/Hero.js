import styles from "./Hero.module.scss";
import PropTypes from "prop-types";

function Hero(props) {
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{props.title}</h2>
      <img
        className={styles.image}
        src={props.image}
        alt="todo_background_img"
      />
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
