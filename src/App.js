import styles from "./App.module.scss";
import List from "./components/List/List";

function App() {
  return (
    <main className={styles.component}>
      <h1 className={styles.title}>My first React app</h1>
      <h2 className={styles.subtitle}>Hello world!</h2>
      <List
        title={["Things to do ", <sup key="1">soon!</sup>]}
        image={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"}
      >
        <p>I'm planning on doing all these things sooner!</p>
      </List>
    </main>
  );
}

export default App;
