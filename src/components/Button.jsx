import PropTypes from "prop-types";

import styles from "./Button.module.css";

// type - additional class name that styles button in order to customize button depending on type
// All class types are in Button.module.css
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
