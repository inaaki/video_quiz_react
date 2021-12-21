import classes from '../styles/Button.module.css';

function Button({children}) {
  return (
    <div className={classes.button}>
      <span>{children}</span>
    </div>
  );
}

export default Button;
