
import React, { useState } from 'react';
import './AddScorePopUp.css';

const AddScorePopUp = ({ onClose, addScore }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addScore({ username, score });
    onClose();
  };

  return (
    <div className="popup">
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
