const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
  };
  return (
    <form onSubmit={addUserHandler} action="">
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Username</label>
      <input id="age" type="text" />
      <button type="submit">Create new user</button>
    </form>
  );
};

export default AddUser;
