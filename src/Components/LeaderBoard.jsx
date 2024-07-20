
import React from 'react';
import './LeaderBoard.css';

const LeaderBoard = ({ scores }) => {
  const topScores = scores.sort((a, b) => a.score - b.score).slice(0, 10);

  return (
    <div className="leaderboard">
      <h2>LEADERBOARD</h2>
      <div className="player-info">
        <span>Player Name</span>
        <span>Timer</span>
      </div>
      <ul>
        {topScores.map((entry, index) => (
          <li key={index}>
            <span>{entry.username}</span>
            <span>{entry.score}</span>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default LeaderBoard;
