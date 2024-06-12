import { MAX_GUESSES } from '@/config';
import { range } from '@/lib/utils';
import { Guess } from '@/components/guess';

export function GameResults({ guesses, answer }) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      {range(MAX_GUESSES).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}
