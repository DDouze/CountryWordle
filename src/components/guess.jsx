import { range } from '@/lib/utils';
import { checkGuess } from '@/lib/utils';
import { cn } from '@/lib/utils';

function Cell({ letter, status }) {
  let classStatus = '';
  if (status === 'correct') {
    classStatus = 'bg-brand-green text-white';
  } else if (status === 'misplaced') {
    classStatus = 'bg-brand-yellow text-brand-darkgreen';
  } else if (status === 'incorrect') {
    classStatus = 'bg-brand-pink text-white';
  }
  return (
    <span
      className={cn(
        'relative w-[20%] grid place-content-center aspect-square border-brand-darkgreen border-[1px] rounded-md text-3xl text-brand-darkgreen',
        classStatus
      )}
    >
      {letter}
    </span>
  );
}

export function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="flex gap-[4px]  mb-[4px]">
      {range(answer.length).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}
