'use client';

import { useState } from 'react';
import { GameInput } from '@/components/game-input';
import { GameResults } from '@/components/game-results';
import { MAX_GUESSES } from '@/config';
import { Results } from '@/components/results';
import Image from 'next/image';

export function Game({ gameType, randomCountry }) {
  // running | won | lost
  const [gameStatus, setGameStatus] = useState('running');
  const [answer, setAnswer] = useState(() => {
    return gameType === 'country' ? randomCountry.name : randomCountry.capital;
  });
  const [guesses, setGuesses] = useState([]);
  const answerLength = answer.length;

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= MAX_GUESSES) {
      setGameStatus('lost');
    }
  }

  if (gameStatus === 'won') {
    return <Results status="won" />;
  } else if (gameStatus === 'lost') {
    return <Results status="lost" answer={answer} />;
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <div className="flex items-center justify-center h-16 bg-brand-blue text-white">
        <h1 className="text-2xl font-bold">Country Wordle</h1>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 mx-auto my-0 min-w-[350px] max-w-[min(500px,58vh,100%)]">
        <Image
          src={randomCountry.flag}
          alt="Drapeau"
          width={450}
          height={300}
          className="rounded-md shadow-md mx-auto aspect-[4/3] w-[100%] max-h-[200px]"
        />
        <GameResults guesses={guesses} answer={answer} />
        <GameInput
          gameType={gameType}
          answerLength={answerLength}
          handleSubmitGuess={handleSubmitGuess}
        />
      </div>
    </div>
  );
}
