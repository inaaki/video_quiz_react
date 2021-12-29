function Checkbox({ className, text, onChange, index, ...rest }) {
  return (
    <label className={className}>
      <input type='checkbox' onChange={(e) => onChange(e, index)} {...rest} />{' '}
      <span>{text}</span>
    </label>
  );
}

export default Checkbox;
