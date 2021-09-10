import React, { useState, useEffect } from 'react';
import Joke from './skeletonTut/Joke';
import './skeletonTut/stil.css';

const App = () => {

  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);

  const getNewJoke = () => {
    setLoading(true);
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        const { icon_url, value } = data;
        setJoke({ icon_url, value });
        setLoading(false)
        console.log(data);
      })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getNewJoke();
    }, 5000)
    return () => clearTimeout(timer);
  }, [])

  return (
    <div>
        <Joke joke={joke} loading={loading} getNewJoke={getNewJoke} />
    </div>
  );
}
export default App;
