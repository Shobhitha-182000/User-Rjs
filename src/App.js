import { useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

const App = () => {
  const [userData, setUserData] = useState([]);

  const saveUserData = (user) => {
    setUserData((previous) => {
      return [...previous, user];
    });
  };

  return (
    <div className="app-container">
      <UserForm onSaveUser={saveUserData} />
      <UserList items={userData} />
    </div>
  );
};

export default App;
