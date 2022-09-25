import styles from "./Hero.module.scss";

function Hero() {
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>Things to do</h2>
      <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt='todo_background_img'/>
    </header>
  );
}

export default Hero;
