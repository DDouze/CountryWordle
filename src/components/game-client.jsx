'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Intro } from '@/components/intro';
import { Countdown } from '@/components/countdown';
import { Game } from '@/components/game';

export function GameClient() {
  const [displayView, setDisplayView] = useState('intro');
  const [gameType, setGameType] = useState('country');
  return (
    <main className="h-viewport flex flex-col w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {
          {
            intro: (
              <Intro
                gameType={gameType}
                setGameType={setGameType}
                onGetStartedClick={() => {
                  setDisplayView('countdown');
                }}
              />
            ),
            countdown: (
              <Countdown
                onGoClick={() => {
                  setDisplayView('game');
                }}
              />
            ),
            game: <Game gameType={gameType}  />,
          }[displayView]
        }
      </AnimatePresence>
    </main>
  );
}
