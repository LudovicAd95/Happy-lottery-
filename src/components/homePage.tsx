import React from 'react';
import '../styles/homePage.css';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const Homepage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleButtonClick = () => {
    onNavigate('lottery'); 
  };

  return (
    <div className="homepage">
      <div className="rules">
        <h1>Les règles :</h1>
        <div className='rules-text'>
          <p>Chaque enfant qui le souhaite à le droit de participer une fois à notre loterie.</p>
          <p>Nous devons renseigner son nom et prénom , son genre , ainsi que son âge. </p>
          <p>Nous tirons ensuite au sort le cadeau qui lui sera attribué</p>
        </div>
      </div>
      <div className="goButton">
        <button type="button" onClick={handleButtonClick}>Participer</button>
      </div>
    </div>
  );
}

export default Homepage;