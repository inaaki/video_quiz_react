import classes from '../styles/Button.module.css';

function Button({ children, ...rest }) {
  return (
    <button {...rest} className={classes.button}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
