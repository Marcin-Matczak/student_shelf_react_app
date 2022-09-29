import React from "react";
import styles from "./Home.module.scss"
import PropTypes from "prop-types";
import List from "../List/ListContainer";
import Search from "../Search/SearchContainer";

class Home extends React.Component {
  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map((listData) => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

Home.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
};

export default Home;
