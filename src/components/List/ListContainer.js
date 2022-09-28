import { connect } from "react-redux";
import List from "./List";
import { getColumnsForList, createActionAddColumn } from "../../redux/columnsRedux";

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: (title) => dispatch(createActionAddColumn({
        listId: props.id,
        title: title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

//mapDispatchToProps to funkcja, która nadaje komponentowi propsy, w których znajdą się funkcje wysyłające akcje do magazynu. Akcja jest zgłoszeniem chęci zmiany stanu aplikacji
