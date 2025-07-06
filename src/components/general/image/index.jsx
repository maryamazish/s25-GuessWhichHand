const Image = ({ src, alt, width, height, cssName, id }) => {
  return <img src={src} alt={alt} width={width} height={height} id={id} className={cssName} />;
};

export default Image;
