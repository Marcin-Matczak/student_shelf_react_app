import styles from "./Hero.module.scss";
import PropTypes from "prop-types";
import parse from "html-react-parser";

function Hero(props) {
  const { title, image } = props;
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{parse(title)}</h2>
      <img
        className={styles.image}
        src={image}
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
