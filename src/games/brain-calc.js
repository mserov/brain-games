import { cons, car, cdr } from 'hexlet-pairs';
import interfaceAll from '..';

const game = () => {
  const rules = 'What is the result of the expression?';

  const generateQuestionAnswer = () => {
    const compute = (num1, num2, operation) => {
      switch (operation) {
        case 0:
          return cons('+', String(num1 + num2));
        case 1:
          return cons('-', String(num1 - num2));
        case 2:
          return cons('*', String(num1 * num2));
        default:
          return 'default';
      }
    };

    const maxNum = 100;

    const num1 = Math.floor(Math.random() * maxNum);
    const num2 = Math.floor(Math.random() * maxNum);
    const operation = Math.floor(Math.random() * 3);

    const signAnswer = compute(num1, num2, operation);

    const question = `${num1} ${car(signAnswer)} ${num2}`;
    const correctAnswer = cdr(signAnswer);

    return cons(question, correctAnswer);
  };

  interfaceAll(rules, generateQuestionAnswer);
};

export default game;
