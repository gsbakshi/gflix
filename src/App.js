import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './components/header/header.component'; 
import HeroSection from './components/hero-section/hero-section.components';
import GenresList from './components/genres-list/genres-list.components';

const App = () => {

  const genreIncrement = 4;

  const [genres, setGenres] = useState([]);
  const [limit, setLimit] = useState(genreIncrement);

  useEffect(() => {
    (async () => {
      const response = await fetch('/.netlify/functions/getGenres', {
        method: "POST",
        body: limit,
      })
      const responseBody = await response.json();
      setGenres(responseBody.data.reference_list.values);
    })();
  }, [limit]);

  const onPageEnd = () => setLimit(limit + genreIncrement);
  

  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <GenresList
        genres={ genres }
        limit={ limit }
        onPageEnd={ onPageEnd }
      />
    </div>
  );
};

export default App;