const Button = ({ clName, btn, clickEvent }) => {
  return (
    <button className={clName} onClick={clickEvent}>
      {btn}
    </button>
  );
};
export default Button;
