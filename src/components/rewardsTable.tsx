import { useEffect, useState } from "react";
import "../styles/rewardsTable.css";

interface UserInfo {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  age: string;
}

function RewardsTable() {
  const [usersList, setUsersList] = useState<UserInfo[]>([]);

  useEffect(() => {
    const storedUsersList = localStorage.getItem("usersList");
    if (storedUsersList) {
      setUsersList(JSON.parse(storedUsersList));
      console.log("Reception data usersList dans RewardsTable:", storedUsersList);
    }
  }, []);

  return (
    <div className="rewards-container">
      <h1>Tableau des récompenses:</h1>
      <div className="usersList">
        <h2>Liste des utilisateurs:</h2>
        <ul>
          {usersList.map((user) => (
            <li key={user.id}>
              {user.firstname} {user.lastname}, {user.gender}, {user.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RewardsTable;