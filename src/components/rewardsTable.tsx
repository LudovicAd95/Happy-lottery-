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
  const [rewardsList, setRewardsList] = useState<SelectedItem[]>([]);

  useEffect(() => {
    const storedUsersList = localStorage.getItem("usersList");
    if (storedUsersList) {
      setUsersList(JSON.parse(storedUsersList));
      console.log("Reception data usersList dans RewardsTable:", storedUsersList);
    }

    const storedRewardsList = localStorage.getItem("RewardsList");
    if (storedRewardsList) {
      setRewardsList(JSON.parse(storedRewardsList));
      console.log("Reception data rewardsList dans RewardsTable:", storedRewardsList);
    }
  }, []);

  return (

      <div className="usersList">
        <h2>Liste des gagnants:</h2>
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
            {usersList.map((user, index) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{rewardsList[index]?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default RewardsTable;