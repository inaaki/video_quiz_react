function Checkbox({ text, id, className }) {
  return (
    <label className={className}>
      <input type='checkbox' id={id} /> <span>{text}</span>
    </label>
  );
}

export default Checkbox;
