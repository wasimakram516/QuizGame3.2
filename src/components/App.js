import React, { useState } from 'react';
import StartScreen from './StartScreen';
import Quiz from './quiz';  // Make sure the import casing is correct
import ResultScreen from './ResultScreen';
import quizData from '../data/quizData'; // Quiz data for Section A


function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'sectionA', 'quizA', 'sectionB', 'quizB', 'result'
  const [score, setScore] = useState(0);

  // Start the game 
  const startGame = () => {
    setScore(0);
    setGameState('quiz');
  };

  // End the quiz 
  const endGame = () => {
    setGameState('result');
  };

  // Restart the game
  const restartGame = () => {
    setGameState('start');
  };

  return (
    <div className="App">
      {gameState === 'start' && <StartScreen startGame={startGame} />}
      
      {/* Quiz A */}
      {gameState === 'quiz' && (
        <Quiz
          endGame={endGame}
          incrementScore={() => setScore(score + 1)}
          quizData={quizData} // Pass Section A data
          restartGame={restartGame}
        />
      )}
      
      {/* Result Screen */}
      {gameState === 'result' && (
        <ResultScreen
          score={score}
          total={quizData.length } 
          restartGame={restartGame}
        />
      )}
    </div>
  );
}

export default App;
