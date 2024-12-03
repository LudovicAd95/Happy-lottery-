import '../styles/homePage.css'

function homepage () {
  return (
    <div className="homepage">
    <div className="rules">
      <h1>Les règles :</h1>
      <div className='rules-text'>
      <p>Chaque enfant qui le souhaite à le droit de participer une fois à notre loterie.</p>
      <p>Nous devons renseigner son nom et prénom , son genre , ainsi que son âge. </p>
      <p>Nous tirons ensuite au sort le cadeau qui lui sera attribué</p>
      <p>Tout enfant participant à la loterie doit être recensé dans un tableau</p>
      <p>Il y a 20 lots à gagner</p>
      </div>

      </div>
      <div className="goButton"><button type='button' >Participer</button></div>

</div>
  );
}

export default homepage;