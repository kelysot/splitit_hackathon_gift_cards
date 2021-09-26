const Button = ({ text, onClick, classN = "btn", color = "black", giftcard = '' }) => {
  return (
    <button
      onClick={onClick}
      className={classN}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
