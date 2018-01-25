import interfaceAll from '..';

const game = () => {
  const rules = 'Answer "yes" if tne number is even otherwise answer "no".';

  const generateQuestion = () => {
    const maxNum = 1000;
    return Math.floor(Math.random() * maxNum);
  };

  const correctAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }

    return 'no';
  };

  interfaceAll(rules, generateQuestion, correctAnswer);
};

export default game;
