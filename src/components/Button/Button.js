import styles from "./Button.module.scss";

function Button({ variant = "", ...otherProps }) {
  return (
    <button
      {...otherProps}
      className={
        styles.component +
        variant
          .split(" ")
          .map((name) => " " + (styles[name] || name))
          .join("")
      }
    />
  );
}

export default Button;
