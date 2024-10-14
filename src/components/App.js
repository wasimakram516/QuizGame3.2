import React, { useState } from 'react';
import StartScreen from './StartScreen';
import Quiz from './Quiz'; 
import ResultScreen from './ResultScreen';
import quizData from '../data/quizData';


function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'quiz', 'result'
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
      
      {/* Quiz */}
      {gameState === 'quiz' && (
        <Quiz
          endGame={endGame}
          incrementScore={() => setScore(score + 1)}
          quizData={quizData} 
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
