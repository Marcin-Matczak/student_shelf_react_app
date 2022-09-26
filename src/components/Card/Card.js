import React from "react";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";

function Card(props) {
  return <p className={styles.component}>{props.title}</p>;
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
