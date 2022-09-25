import styles from "./List.module.scss";
import Hero from "../Hero/Hero.js";
import PropTypes from "prop-types";
import React from "react";
import Column from "../Column/Column.js";

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero title={this.props.title} image={this.props.image} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column textTitle={"Title 1"} />
          <Column textTitle={"Title 2"} />
          <Column textTitle={"Title 3"} />
        </div>
      </section>
    );
  }
}

List.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  image: PropTypes.string,
};

List.defaultProps = {
  children: <p>I can do all the things!!!</p>,
};

export default List;
