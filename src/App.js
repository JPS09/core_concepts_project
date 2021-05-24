import style from "./App.module.css";
import AddUser from "./Components/Users/AddUser.js";

function App() {
  return (
    <div className={style.background}>
      <AddUser></AddUser>
    </div>
  );
}

export default App;
