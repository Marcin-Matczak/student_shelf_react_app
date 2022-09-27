import React from "react";
import styles from "./Column.module.scss";
import PropTypes from "prop-types";
import Card from "../Card/Card.js";
//import Creator from "../Creator/Creator.js";
//import { settings } from "../../data/dataStore.js";
import Icon from "../Icon/Icon.js";

class Column extends React.Component {
  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.cards}>
          {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*<div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={this.addCard.bind(this)}
          />
          </div>*/}
      </section>
    );
  }
}

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  cards: PropTypes.array,
};

export default Column;
