import { cons } from 'hexlet-pairs';
import engine from '..';

const game = () => {
  const rules = 'Answer "yes" if tne number is even otherwise answer "no".';

  const generateQuestionAnswer = () => {
    const ifEven = (num) => {
      if (num % 2 === 0) {
        return 'yes';
      }

      return 'no';
    };

    const maxNum = 1000;

    const question = Math.floor(Math.random() * maxNum);
    const correctAnswer = ifEven(question);

    return cons(question, correctAnswer);
  };

  engine(rules, generateQuestionAnswer);
};

export default game;
