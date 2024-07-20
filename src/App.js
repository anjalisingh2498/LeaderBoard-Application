import React, { useState } from 'react';
import Leaderboard from './Components/LeaderBoard';
import AddScorePopup from './Components/AddScorePopUp';

import './App.css';
import './App.css';
import Footer from './Components/Footer';


  const App = () => {
    const [scores, setScores] = useState([
      { username: 'Player1', score: '01:23:456' },
      { username: 'Player2', score: '02:34:567' },
      { username: 'Player3', score: '01:23:456' },
      { username: 'Player4', score: '02:34:567' },
      { username: 'Player5', score: '01:23:456' },
      { username: 'Player6', score: '02:34:567' },
      // Add more dummy data as needed
    ]);
  
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const addScore = (newScore) => {
      setScores([...scores, newScore]);
    };
  return (
    <div className="App">
    <header className="App-header">
      <h1>LEADERBOARD</h1>
      <button onClick={() => setIsPopupOpen(true)}>Add Score</button>
    </header>
    <Leaderboard scores={scores} />
    {isPopupOpen && <AddScorePopup onClose={() => setIsPopupOpen(false)} addScore={addScore} />}
   <Footer/>
  </div>
  );
}

export default App;
