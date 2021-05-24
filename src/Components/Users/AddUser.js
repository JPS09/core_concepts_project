import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import classes from "./AddUser.module.css";
import { useState } from "react";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.currentTarget.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.currentTarget.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    const newUser = {
      username: enteredUsername,
      age: enteredAge,
    };
    console.log({ newUser });
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} action="">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" onChange={ageChangeHandler} />
        <Button type="submit">Create User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
