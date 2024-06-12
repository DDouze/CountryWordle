import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function GameInput({ handleSubmitGuess, gameType, answerLength }) {
  const [tentativeGuess, setTentativeGuess] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  // Setup autofocus on first render
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="flex flex-col gap-[8px] h-26" onSubmit={handleSubmit}>
      <Label htmlFor="tentative-answer">
        Trouvez{' '}
        {gameType === 'country' ? 'le pays : ' : 'la capitale du pays : '}
      </Label>
      <Input
        id="tentative-answer"
        required
        ref={inputRef}
        minLength={answerLength}
        maxLength={answerLength}
        pattern={`[a-zA-Z]{${answerLength}}`}
        title={`Entrez  ${
          gameType === 'country' ? 'un pays' : 'une ville'
        } de ${answerLength} lettres`}
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}
