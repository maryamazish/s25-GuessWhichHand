const Button = ({ name, type, onAction }) => {
  return (
    <button onClick={onAction} type={type} className="button">
      {name}
    </button>
  );
};
export default Button;
