'use client';

'use client';

import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/use-countdown';
import { COUNTDOWN_TIME } from '@/config';

export const Countdown = ({ onGoClick }) => {
  const countdown = useCountdown(COUNTDOWN_TIME);

  return (
    <motion.div
      key={'countdown'}
      variants={{
        initial: {
          background: '#06d6a0ff',
          clipPath: 'circle(0% at 50% 50%)',
        },
        animate: {
          background: '#06d6a0ff',
          clipPath: 'circle(100% at 50% 50%)',
        },
      }}
      className="w-full h-full flex justify-center items-center px-5 py-8"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-white font-bold text-[32px]">
        <h1 className="p-4 rounded-md border">Country Wordle</h1>
        <p className="mt-[116px]">Le jeu commence dans</p>
        <div className="flex justify-center items-center mt-[38px] rounded-full border-8 border-white w-[196px] h-[196px] bg-transparent">
          {countdown !== 0 ? (
            <span className="text-[118px]">{countdown}</span>
          ) : (
            <span className="text-[88px] cursor-pointer" onClick={onGoClick}>
              GO
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
