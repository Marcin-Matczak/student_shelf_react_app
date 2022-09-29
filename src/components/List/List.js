import styles from "./List.module.scss";
import Hero from "../Hero/Hero.js";
import PropTypes from "prop-types";
import React from "react";
import Column from "../Column/ColumnContainer.js";
import { settings } from "../../data/dataStore.js";
import parse from "html-react-parser";
import Creator from "../Creator/Creator.js";
import Container from "../Container/Container.js";

function List(props) {
  const { title, image, description, columns, addColumn } = props;
  return (
    <Container>
    <section className={styles.component}>
      <Hero title={title} image={image} />
      <div className={styles.description}>{parse(description)}</div>
      <div className={styles.columns}>
        {columns.map((columnData) => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={addColumn} />
      </div>
    </section>
    </Container>
  );
}

List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;
