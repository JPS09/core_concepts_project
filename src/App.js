import { useState } from "react";
import AddUser from "./Components/Users/AddUser.js";
import UserList from "./Components/Users/UserList.js";
function App() {
  const [usersList, setUsersList] = useState([]);
  const newUserHandler = (uName, uAge) => {
    console.log(uName, uAge, "app");
    setUsersList((previousUsers) => {
      return [
        ...previousUsers,
        { name: uName, age: uAge, id: Date.now().toString },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={newUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
