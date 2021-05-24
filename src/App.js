import style from "./App.module.css";
import AddUser from "./Components/Users/AddUser.js";
import UserList from './Components/Users/UserList.js'

function App() {
  return (
    <div className={style.background}>
      <AddUser></AddUser>
      <UserList users={[]}></UserList>
    </div>
  );
}

export default App;
