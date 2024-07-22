
import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './AddScorePopUp.css';

const AddScorePopUp = ({ onClose, addScore }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const [isExploding, setIsExploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addScore({ username, score });
    setIsExploading(true);
    setTimeout(() => {
    setIsExploading(false);
    onClose();
    },3000);
  };
  
  return (
    <div className="popup">
      {isExploding && (
          <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />
      )}
      <div className="popup-inner">
        <h3>Add Score</h3>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Score (MM:SS:MS):</label>
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
          <button type="submit">Add</button>
        </form>
        <br></br>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddScorePopUp;
