import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser.js";
import UserList from "./Components/Users/UserList.js";
function App() {
  const [usersList, setUsersList] = useState([]);
  const newUserHandler = (uName, uAge) => {
    console.log(uName, uAge, "app");
    setUsersList((previousUsers) => {
      return [
        ...previousUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={newUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </React.Fragment>
  );
}

export default App;
