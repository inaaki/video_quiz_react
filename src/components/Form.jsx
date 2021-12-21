import classes from '../styles/Form.module.css';

function Form({ className, children }) {
  return <form className={`${className} ${classes.form}`}>{children}</form>;
}

export default Form;
