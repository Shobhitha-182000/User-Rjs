import React from "react";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="container">
      <ul className="ul-list-layout">
        {props.items.map((user, index) => (
          <li className="list-layout" key={index}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
