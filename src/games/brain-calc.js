import interfaceAll from '..';

const game = () => {
  const rules = 'What is the result of the expression?';

  const generateQuestion = () => {
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

    const maxNum = 100;

    const num1 = Math.floor(Math.random() * maxNum);
    const num2 = Math.floor(Math.random() * maxNum);
    const operation = Math.floor(Math.random() * 3);

    return `${num1} ${sign(operation)} ${num2}`;
  };

  const correctAnswer = (str) => {
    switch (str[2]) {
      case '+':
        return String(Number(str[0]) + Number(str[4]));
      case '-':
        return String(Number(str[0]) - Number(str[4]));
      case '*':
        return String(Number(str[0]) * Number(str[4]));
      default:
        return 'default';
    }
  };

  interfaceAll(rules, generateQuestion, correctAnswer);
};

export default game;
