import React from 'react';

function TextInput({ wordList, setWordList }) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess })
    setWordList([...wordList, guess]);
    setGuess('');
  }

  return (
  <>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" pattern="[a-zA-Z]{5}" minLength={5} maxLength={5} title='5 letter word' type="text" value={guess} onChange={(event) => {
        setGuess(event.target.value.toUpperCase())
      }}/>
    </form>
  </>
)}

export default TextInput;
