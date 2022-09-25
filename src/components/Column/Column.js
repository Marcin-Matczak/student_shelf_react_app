import React from "react";
import styles from "./Column.module.scss";
import PropTypes from "prop-types";

class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.textTitle}</h3>
      </section>
    );
  }
}

Column.propTypes = {
  textTitle: PropTypes.string,
};

export default Column;
