import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import TextInput from '../TextInput/TextInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([])

  return (
  <>
    <GuessResults wordList={wordList}/>
    <TextInput wordList={wordList} setWordList={setWordList}/>
  </>
)}

export default Game;
