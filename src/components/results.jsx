'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Results({ status, answer }) {

  const isWon = status === 'won';
  const message = isWon ? 'Bravo, vous avez gagné !' : 'Vous avez perdu !';
  const color = isWon ? '#06d6a0ff' : '#ef476fff';
  const reloadGame = () => {
    window.location.reload();
  };
  return (
    <motion.div
      key={'result'}
      variants={{
        initial: {
          background: color,
          clipPath: 'circle(0% at 50% 50%)',
        },
        animate: {
          background: color,
          clipPath: 'circle(100% at 50% 50%)',
        },
      }}
      className="w-full h-full flex justify-center p-5"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col text-black font-bold text-[32px] text-center w-full">
        <div className="w-full flex flex-col space-x-2 justify-center items-center">
          <h1 className="font-bold text-xl text-white space-x-2">
            Country Wordle
          </h1>
          <Separator className="my-4" />
          <span className=" text-xl text-white font-bold ">{message}</span>
          {!isWon && (
            <span className="text-xl text-white font-bold">
              La réponse était : {answer}
            </span>
          )}
        </div>
        <div className="m-auto">
          <div className="flex justify-center items-center mt-[38px] rounded-full border-8 border-white w-[196px] h-[196px] bg-transparent">
            <span className="cursor-pointer" onClick={reloadGame}>
              <RotateCcw className="w-[88px] h-[88px] text-white" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
