import React, { useState } from "react";
import BottomNavigation from "./BottomNavigation";
import GameDetails from "./GameDetails";
import Navber from "./Navber";
import ReachrgeShowModel from "./ReachrgeShowModel";

const Home = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Navber />
      <GameDetails />
      <BottomNavigation />

      {isOpen && <ReachrgeShowModel isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
};

export default Home;
