import PropTypes from "prop-types";
import styles from "./Container.module.scss";
import { motion } from "framer-motion";

function Container(props) {
  const { children } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.component}
    >
      {children}
    </motion.div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
