function Checkbox({
  checked,
  defaultChecked,
  defaultClass,
  index,
  modifyBackground,
  onChange,
  text,
  ...rest
}) {
  return (
    <label
      className={defaultClass + ' ' + (!onChange ? modifyBackground() : '')}
    >
      {/* choosing between controlled and uncontrolled */}
      {onChange ? (
        <input
          checked={checked}
          onChange={(e) => onChange(e, index)}
          type='checkbox'
          {...rest}
        />
      ) : (
        <input
          defaultChecked={defaultChecked}
          disabled
          type='checkbox'
          {...rest}
        />
      )}
      <span>{text}</span>
    </label>
  );
}

export default Checkbox;
