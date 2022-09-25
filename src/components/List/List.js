import styles from './List.module.scss';
import Hero from '../Hero/Hero.js';

function List(){
    return (
        <section className={styles.component}>
            <Hero />
        </section>
    )
}

export default List;