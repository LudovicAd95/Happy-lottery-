import { useEffect, useState } from "react";
import "../styles/rewardsTable.css";

interface UserInfo {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  age: string;
}

interface SelectedItem {
  id: number;
  name: string;
  description: string;
  photo: string;
  age_range: number;
  gender: string;
}

function RewardsTable() {
  const [usersList, setUsersList] = useState<UserInfo[]>([]);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  useEffect(() => {
    const storedUsersList = localStorage.getItem("usersList");
    if (storedUsersList) {
      setUsersList(JSON.parse(storedUsersList));
      console.log("Reception data usersList dans RewardsTable:", storedUsersList);
    }

    const storedSelectedItem = localStorage.getItem("randomItem");
    if (storedSelectedItem) {
      setSelectedItem(JSON.parse(storedSelectedItem));
      console.log("Reception data selectedItem dans RewardsTable:", storedSelectedItem);
    }
  }, []);

  return (
    <div className="rewards-container">
      <h1>Tableau des récompenses:</h1>
      <div className="usersList">
        <h2>Liste des utilisateurs:</h2>
        <table>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Genre</th>
              <th>Âge</th>
              <th>Cadeau</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{selectedItem && selectedItem.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RewardsTable;