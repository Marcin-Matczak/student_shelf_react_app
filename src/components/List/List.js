import styles from "./List.module.scss";
import Hero from "../Hero/Hero.js";
import PropTypes from "prop-types";
import React from "react";
import Column from "../Column/Column.js";
import { settings } from "../../data/dataStore.js";
import parse from "html-react-parser";
import Creator from "../Creator/Creator.js";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.props.columns || [],
    };
  }

  addColumn(title) {
    this.setState((state) => ({
      columns: [
        ...state.columns,
        {
          key: state.columns.length
            ? state.columns[state.columns.length - 1].key + 1
            : 0,
          title,
          icon: "list-alt",
          cards: [],
        },
      ],
    }));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero title={this.props.title} image={this.props.image} />
        <div className={styles.description}>
          {parse(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={this.addColumn.bind(this)}
          />
        </div>
      </section>
    );
  }
}

List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  description: PropTypes.node,
  columns: PropTypes.array,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;
