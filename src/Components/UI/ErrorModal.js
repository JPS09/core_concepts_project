import Card from "./Card.js";
import Button from "./Button";
import style from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose} />;
};

const Modal = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("modal-backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("modal-element")
      )}
    </>
  );
};
export default ErrorModal;
