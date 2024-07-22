import React from 'react';

function TextInput() {

  const [guess, setGuess] = React.useState('')
  finalAnswer = guess.toUpperCase()

  function handleSubmit(event) {
    event.preventDefault();
    if (finalAnswer.length > 5 || finalAnswer.length < 5) {
      alert("Please enter a 5-letter word.")
    }
    console.info({ finalAnswer })
    setGuess('');
  }

  return (
  <>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={(event) => {
        setGuess(event.target.value)
      }}/>
    </form>
  </>
)}

export default TextInput;
