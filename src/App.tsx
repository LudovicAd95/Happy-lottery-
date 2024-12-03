<<<<<<< HEAD
import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'
function App() {
  

  return (
    <>
      < Header />
     
      < Footer />
=======
import { useState } from 'react';
import Homepage from './components/HomePage';
import LotteryPage from './components/lotteryPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'home' && <Homepage onNavigate={handleNavigate} />}
      {currentPage === 'lottery' && <LotteryPage />}
>>>>>>> origin/Homepage
    </>
  );
}

export default App;
