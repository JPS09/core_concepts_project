import style from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={style.button}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};
export default Button;
