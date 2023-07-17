import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [enterName, setName] = useState("");
  const [enterAge, setAge] = useState("");
  const [isEmpty, setEmpty] = useState(false);

  const nameHandler = (event) => {
    
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    
      
    setAge(event.target.value);
    
  };

  const saveUserHandler = (event) => {
    event.preventDefault();
    if(enterName.trim().length==0 || enterAge.trim().length){
      return window.alert("enter a name and age");
    }
    if(enterAge<1){
      return window.alert("enter a valid age");
    }
    const user = {
      name: enterName,
      age: enterAge,
    };
    
    props.onSaveUser(user);
    setName("");
    setAge("");
  };

  return (
    <div className="form-container">
      <h2>User Information</h2>
      <table className="table">
        <tr>
          <td className="td">
            <label className="label">Username:</label>
          </td>
          <td className="td">
            <input
              type="text"
              className="input"
              value={enterName}
              onChange={nameHandler}
            />
          </td>
        </tr>
        <tr>
          <td className="td">
            <label className="label">Age:</label>
          </td>
          <td className="td">
            <input
              type="number"
              className="input"
              value={enterAge}
              onChange={ageHandler}
            />
          </td>
        </tr>
      </table>
      <button className="button" onClick={saveUserHandler}>
        Add User
      </button>
    </div>
  );
};

export default UserForm;
