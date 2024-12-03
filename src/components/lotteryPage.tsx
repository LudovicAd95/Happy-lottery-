import Header from './header';
import info from './info';
import RandomGift from './randomGift';
import rewardsTable from './rewardsTable';
import Footer from './footer';

import '../styles/lotteryPage.css'

function lotteryPage () {
  return (
    <div className='body'>
        <Header />
        <div className='mainpage'>
            <rewardsTable />
            <RandomGift />
            <info />
        </div>
        <Footer />
    </div>
  );
}

export default lotteryPage;