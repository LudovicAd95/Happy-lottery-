import header from './header';
import info from './info';
import randomGift from './randomGift';
import rewardsTable from './rewardsTable';
import footer from './footer';

import '../styles/lotteryPage.css'

function lotteryPage () {
  return (
    <div className='body'>
        <header />
        <div className='mainpage'>
            <rewardsTable />
            <randomGift />
            <info />
        </div>
        <footer />
    </div>
  );
}

export default lotteryPage;