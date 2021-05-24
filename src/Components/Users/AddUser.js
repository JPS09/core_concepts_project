import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import classes from "./AddUser.module.css";
import { useState } from "react";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.currentTarget.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.currentTarget.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge <= 0
    ) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} action="">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="text"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Create User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
