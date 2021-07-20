import React from 'react';

import './App.css';

import Header from './components/header/header.component'; 
import HeroSection from './components/hero-section/hero-section.components';
import GenresList from './components/genres-list/genres-list.components';


const App = () => (
  <div className='App'>
    <Header />
    <HeroSection />
    <GenresList />
  </div>
);

export default App;
