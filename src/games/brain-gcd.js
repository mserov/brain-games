import { cons } from 'hexlet-pairs';
import interfaceAll from '..';

const game = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const generateQuestionAnswer = () => {
    const gcd = (num1, num2) => (num2 ? gcd(num2, num1 % num2) : num1);

    const maxNum = 1000;

    const num1 = Math.floor(Math.random() * maxNum);
    const num2 = Math.floor(Math.random() * maxNum);

    const question = `${num1} ${num2}`;
    const correctAnswer = String(gcd(num1, num2));

    return cons(question, correctAnswer);
  };

  interfaceAll(rules, generateQuestionAnswer);
};

export default game;
