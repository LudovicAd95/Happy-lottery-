import { useEffect, useState } from "react";
import "../styles/randomGift.css";

interface toys {
  id: number;
  name: string;
  description: string;
  photo: number;
  age_range: number;
  gender: string;
}

function RandomGift() {
  const [toys, setToys] = useState<toys[]>([]);
  const [randomItem, setRandomItem] = useState<toys | null>(null);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch("https://happylottery.vercel.app/items", {
          method: "GET",
        });
        const data = await response.json();
        setToys(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchToys();
  }, []);

    console.log(toys);

  const getRandomItem = () => {
    if (toys.length > 0) {
      const randomIndex = Math.floor(Math.random() * toys.length);
      setRandomItem(toys[randomIndex]);
    }
    console.log(randomItem);
  };

  return (
    <div className="randomGiftContainer">
      <h1 className="title" id="ourServices">LA MAGIE DE NOEL:</h1>
      <div>
        <button type="button" onClick={getRandomItem}>Bouton Magique</button>
      </div>
    </div>
  );
}

export default RandomGift;
