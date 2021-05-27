import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
import classes from "./AddUser.module.css";
import { useRef, useState } from "react";
const AddUser = (props) => {
  const enteredName = useRef(); //Does a direct link to the DOM element on which the variable is called with ref atribute
  const enteredUserAge = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorState, setErrorState] = useState();
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.currentTarget.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.currentTarget.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(
      "Accessing the value of the element",
      { enteredName },
      enteredName.current.value
    );
    if (enteredUsername.trim().length === 0) {
      setErrorState({
        title: "Invalid Input",
        message: "Please enter a valid username (non-empty input)",
      });
      return;
    }

    if (+enteredAge <= 0 || enteredAge.trim().length === 0) {
      setErrorState({
        title: "Invalid Age",
        message: "Please enter a valid age (non-empty and bigger than 0)",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const closeModalHandler = () => {
    setErrorState();
  };
  return (
    <div>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onClose={closeModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} action="">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
            ref={enteredName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={enteredAge}
            ref={enteredUserAge}
          />
          <Button type="submit">Create User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
