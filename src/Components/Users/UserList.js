import Card from "../UI/Card.js";
import style from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul >
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
