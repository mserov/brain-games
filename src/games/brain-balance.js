import { cons } from 'hexlet-pairs';
import engine from '..';

const game = () => {
  const rules = 'Balance the given number.';

  const generateQuestionAnswer = () => {
    const balance = (num) => {
      const digits = String(num).split('');
      const max = Math.max(...digits);
      const min = Math.min(...digits);

      if (max - min <= 1) {
        const digitsRes = digits.sort((num1, num2) => num1 - num2).join('');

        return digitsRes;
      }

      const indOfMax = digits.indexOf(String(max));
      const indOfMin = digits.indexOf(String(min));
      digits[indOfMax] = max - 1;
      digits[indOfMin] = min + 1;

      const digitsNew = digits.join('');

      return balance(Number(digitsNew));
    };

    const maxNum = 10000;

    const num = Math.floor(Math.random() * maxNum);

    const question = `${num}`;
    const correctAnswer = String(balance(num));

    return cons(question, correctAnswer);
  };

  engine(rules, generateQuestionAnswer);
};

export default game;
