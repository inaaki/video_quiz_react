import classes from '../styles/Image.module.css';

function Image({ src, alt }) {
  return (
    <div className={classes.illustration}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;
