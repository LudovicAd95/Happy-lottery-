import Info from './info';
import RandomGift from './randomGift';
import RewardsTable from './rewardsTable';

import '../styles/lotteryPage.css'

function LotteryPage () {
  return (
    <div className='mainPage'>
      <RewardsTable />
      <RandomGift />
      <Info />
    </div>
  );
}

export default LotteryPage;
