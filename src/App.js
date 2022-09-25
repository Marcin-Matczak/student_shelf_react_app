import styles from './App.module.scss';
import List from './components/List/List';

function App() {
  return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        < List />
      </main>
    );
  }

export default App;
