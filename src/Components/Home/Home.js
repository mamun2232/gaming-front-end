import React from 'react';
import BottomNavigation from './BottomNavigation';
import GameDetails from './GameDetails';
import Navber from './Navber';

const Home = () => {
      
      return (
            <div>
                  <Navber/>
                  <GameDetails/>
                 <BottomNavigation/>
            </div>
      );
};

export default Home;