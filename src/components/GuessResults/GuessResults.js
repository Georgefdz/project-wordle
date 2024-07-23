import React from 'react';

function GuessResults({ wordList }) {

  
  return (
  <div className="guess-results">
    {wordList.map((word, index) => (
      <p className='guess' key={index}>{word}</p>
    ))}
  </div>
  )
}

export default GuessResults;
