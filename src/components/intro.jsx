'use client';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

import Image from 'next/image';

export const Intro = ({ onGetStartedClick, gameType, setGameType }) => {
  return (
    <div className="px-5 py-8 flex-1 w-full lg:max-w-4xl mx-auto flex flex-col overflow-hidden">
      <Image
        src="/logo.png"
        width={280}
        height={140}
        className="absolute opacity-15  bottom-20 right-10 z-0 object-cover pointer-events-none w-[230px] h-[120px] lg:w-[460px] lg:h-[240px]"
        alt="logo"
      />
      <div className="w-full flex flex-col flex-1 items-center z-10">
        <div className="flex w-full flex-col gap-2 sm:justify-between sm:flex-row-reverse">
          <div className="flex items-center gap-2">
            <h2 className="text-black font-bold text-[18px] sm:text-xl">
              Country Wordle
            </h2>
            <Separator orientation="vertical" />
            <Avatar>
              <AvatarImage src={'/logo-app.png'} alt="Country Wordle" />
            </Avatar>
          </div>
          <h1 className="text-brand-blue font-bold text-[26px] sm:text-3xl">
            Commencer une partie
          </h1>
        </div>
        <h3 className="text-brand-darkgreen font-bold text-xl mt-[51.55px] sm:text-3xl">
          Régles du jeu
        </h3>
        <div className="flex flex-col items-start mt-5 sm:mt-10 space-y-5">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-brand-green" />

            <p className="text-sm text-gray-300 font-normal sm:text-xl">
              Choisir...
            </p>
          </div>
        </div>

        <h3 className="text-brand-green font-bold text-xl mt-[51.55px] sm:text-3xl">
          Choix du mode de jeu
        </h3>
        <div className="flex items-center justify-center mt-5 sm:mt-10 space-x-5">
          <Toggle
            active={gameType === 'country'}
            onClick={() => setGameType('country')}
          >
            Nom du Pays
          </Toggle>
          <Toggle
            active={gameType === 'capital'}
            onClick={() => setGameType('capital')}
          >
            Capitale
          </Toggle>
        </div>
      </div>
      <Button className="w-full z-10" onClick={onGetStartedClick}>
        Commencer le jeu
      </Button>
    </div>
  );
};
