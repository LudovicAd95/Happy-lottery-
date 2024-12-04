import Info from './info';
import RandomGift from './randomGift';
import UpdateRewardsTable from './updateRewardsTable';

import '../styles/lotteryPage.css'

function LotteryPage () {
  return (
    <div className='mainPage'>
      <UpdateRewardsTable />
      <RandomGift />
      <Info />
    </div>
  );
}

export default LotteryPage;
