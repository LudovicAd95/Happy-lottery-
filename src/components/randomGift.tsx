import { useEffect, useState } from "react";
import "../styles/randomGift.css";

interface toys {
  id: number;
  name: string;
  description: string;
  photo: string;
  age_range: number;
  gender: string;
}

function RandomGift() {
  const [toys, setToys] = useState<toys[]>([]);
  const [randomItem, setRandomItem] = useState<toys | null>(null);

  useEffect(() => {
    const fetchToys = async () => {
      fetch("https://happylottery.vercel.app/items", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setToys(data))
        .catch((error) => console.error(error));
    };
    fetchToys();
  }, []);

  console.log("Liste API Toys:", toys);

  const getRandomItem = () => {
    if (toys.length > 0) {
      const randomIndex = Math.floor(Math.random() * toys.length);
      const selectedItem = toys[randomIndex];
      setRandomItem(selectedItem);
      localStorage.setItem("randomItem", JSON.stringify(selectedItem));
      console.log("Item aléatoire ajouté au localStorage:", selectedItem);
      const rewardsTable = (usersList: UserInfo[], selectedItem: SelectedItem) => {
        const updatedList = usersList.map((user) => {
          if (user.age === selectedItem.age_range.toString()) {
            return { ...user, selectedItem };
          }
          return user;
        });
        localStorage.setItem("usersList", JSON.stringify(updatedList));
        console.log("Liste Utilisateurs mise à jour dans LocalStorage:", updatedList);
        return updatedList;
      }
      		setUsersList((prevUsersList) => {
			const updatedList = [...prevUsersList, userInfo];
			localStorage.setItem("usersList", JSON.stringify(updatedList));
			localStorage.setItem("selectedAgeRange", age); // Stocker la tranche d'âge sélectionnée
			console.log(
				"Liste Utilisateurs mise à jour dans LocalStorage:",
				updatedList,
			);
			return updatedList;
		});

    }
  };

  console.log("Item aléatoire:", randomItem);

  return (
    <div className="randomGiftContainer">
      <h1 className="title" id="ourServices">
        LA MAGIE DE NOEL:
      </h1>
      {randomItem && (
        <div className="randomItem">
          <h2>{randomItem.name}</h2>
          <img className="img" src={randomItem.photo} alt={randomItem.name} />
          <p>{randomItem.description}</p>
          <p>Tranche d'âge: {randomItem.age_range} ans</p>
        </div>
      )}
      <button type="button" onClick={getRandomItem}>
        Bouton Magique
      </button>
    </div>
  );
}

export default RandomGift;
