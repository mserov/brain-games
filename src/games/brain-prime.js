import { cons } from 'hexlet-pairs';
import interfaceAll from '..';

const game = () => {
  const rules = 'Is this number prime?';

  const generateQuestionAnswer = () => {
    const isPrime = (num) => {
      for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) return false;
      }

      return true;
    };

    const maxNum = 99;

    const question = Math.floor(Math.random() * maxNum) + 2;
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };

  interfaceAll(rules, generateQuestionAnswer);
};

export default game;
