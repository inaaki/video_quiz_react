/* eslint-disable jsx-a11y/alt-text */
import classes from '../styles/Image.module.css';

function Image({ className, ...props }) {
  return (
    <div className={className || classes.illustration}>
      <img {...props} />
    </div>
  );
}

export default Image;
