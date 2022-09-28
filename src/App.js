import styles from "./App.module.scss";
import PropTypes from "prop-types";
import List from "./components/List/ListContainer.js";

function App(props) {
  const { title, subtitle, lists } = props;
  return (
    <main className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      {lists.map(listData => (<List key={listData.id} {...listData} />))}
    </main>
  );
}

App.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
};

export default App;
