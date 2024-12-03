import { useState } from 'react';
import Homepage from './components/homePage';
import LotteryPage from './components/lotteryPage';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      {currentPage === 'home' && <Homepage onNavigate={handleNavigate} />}
      {currentPage === 'lottery' && <LotteryPage />}
      <Footer />
    </>
  );
}

export default App;
