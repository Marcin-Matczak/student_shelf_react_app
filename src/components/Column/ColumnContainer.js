import { connect } from "react-redux";
import Column from "./Column.js";
import { createActionAddCard, getCardsForColumn } from "../../redux/cardsRedux.js";

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: (title) => dispatch(createActionAddCard({
        columnId: props.id,
        title: title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
