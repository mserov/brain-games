import { cons, car, cdr } from 'hexlet-pairs';
import interfaceAll from '..';

const game = () => {
  const rules = 'What number is missing in this progression?';

  const generateQuestionAnswer = () => {
    const generateSequence = (length) => {
      const maxNum = 100;
      const diff = Math.floor(Math.random() * 9) + 1;

      let a = Math.floor(Math.random() * maxNum);
      let str = '';

      const missingIndex = Math.floor(Math.random() * length);
      const missing = a + (missingIndex * diff);

      for (let i = 0; i < length; i += 1) {
        if (i === missingIndex) {
          str += '.. ';
        } else str += `${a} `;

        a += diff;
      }

      return cons(str, missing);
    };

    const length = 10;

    const sourceSequenceAnswer = generateSequence(length);

    const question = car(sourceSequenceAnswer);
    const correctAnswer = String(cdr(sourceSequenceAnswer));

    return cons(question, correctAnswer);
  };

  interfaceAll(rules, generateQuestionAnswer);
};

export default game;
