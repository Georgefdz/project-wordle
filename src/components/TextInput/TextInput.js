import React from 'react';

function TextInput() {

  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    // if (finalAnswer.length > 5 || finalAnswer.length < 5) {
    //   alert("Please enter a 5-letter word.")
    //   return;
    // }
    console.info({ guess })
    setGuess('');
  }

  return (
  <>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" pattern="[a-zA-Z]{5}" title='5 letter word' type="text" value={guess} onChange={(event) => {
        setGuess(event.target.value.toUpperCase())
      }}/>
    </form>
  </>
)}

export default TextInput;
