import { cons } from 'hexlet-pairs';
import interfaceAll from '..';

const game = () => {
  const rules = 'What is the result of the expression?';

  const generateQuestionAnswer = () => {
    const sign = (index) => {
      switch (index) {
        case 0:
          return '+';
        case 1:
          return '-';
        case 2:
          return '*';
        default:
          return 'default';
      }
    };

    const compute = (num1, num2, operation) => {
      switch (operation) {
        case 0:
          return String(num1 + num2);
        case 1:
          return String(num1 - num2);
        case 2:
          return String(num1 * num2);
        default:
          return 'default';
      }
    };

    const maxNum = 100;

    const num1 = Math.floor(Math.random() * maxNum);
    const num2 = Math.floor(Math.random() * maxNum);
    const operation = Math.floor(Math.random() * 3);

    const question = `${num1} ${sign(operation)} ${num2}`;
    const correctAnswer = compute(num1, num2, operation);

    return cons(question, correctAnswer);
  };

  interfaceAll(rules, generateQuestionAnswer);
};

export default game;
