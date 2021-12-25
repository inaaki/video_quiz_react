import classes from '../styles/Form.module.css';

function Form({ className, children ,...rest}) {
  return <form {...rest} className={`${className} ${classes.form}`}>{children}</form>;
}

export default Form;
