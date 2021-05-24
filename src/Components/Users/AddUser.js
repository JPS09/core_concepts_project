import Card from "../UI/Card.js";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} action="">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" />
        <button type="submit">Create new user</button>
      </form>
    </Card>
  );
};

export default AddUser;
