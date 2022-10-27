
import {Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import getApiData from '../services/animalCrossingApi';


const App = () => {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
      getApiData().then((dataFromApi) => {
        setDataCard(dataFromApi);
      })
    });

  return (
    <div className='app'>
      <header className='header'>
        <a className='header__linkToHome' href="/"><h1 className="header__title">Trying Animal Crossing</h1></a>
        <img className="header__image" alt="Happy Animal Crossing" />
      </header>
      <main className='main'></main>
      <footer></footer>
    </div>
  );
};

export default App;