import React from 'react';
import { useState } from 'react';

const [data, setData] = useState([]);
const [randomItem, setRandomItem] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const RandomGift: React.FC = () => {
  const fetchData = () => {
    setLoading(true);
    setError(null);

    fetch('https://happylottery.vercel.app/?vercelToolbarCode=qzqZXGWpMhiqCHo', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('re-essaye');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const getRandomItem = () => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomItem(data[randomIndex]);
    }
  };

  return (
    <div>
      <button type="button" onClick={getRandomItem}>Bouton Magique</button>
    </div>
  );
};

export default RandomGift;