import PropTypes from "prop-types";
import Header from "../Header/Header";

function MainLayout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
