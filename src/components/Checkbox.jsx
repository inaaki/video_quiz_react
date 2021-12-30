function Checkbox({
  analysisClass,
  checked,
  defaultClass,
  defaultChecked,
  index,
  onChange,
  text,
  ...rest
}) {
  return (
    <label className={defaultClass + ' ' + analysisClass}>
      
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
