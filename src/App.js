import styles from "./App.module.scss";
import List from "./components/List/List";
import { pageContents, listData } from "./data/dataStore.js";

function App() {
  return (
    <main className={styles.component}>
      <h1 className={styles.title}>{pageContents.title}</h1>
      <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
      <List {...listData} />
    </main>
  );
}

export default App;
