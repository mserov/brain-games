import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  console.log('May I have your name?');

  const name = readlineSync.question('Your answer: ');

  console.log(`Hello, ${name}!\n`);

  const arithm = (operation) => {
    switch (operation) {
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
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return 'default';
    }
  };

  let correctCounter = 0;

  while (correctCounter < 3) {
    const maxNum = 100;

    const num1 = Math.floor(Math.random() * maxNum);
    const num2 = Math.floor(Math.random() * maxNum);
    const operation = arithm(Math.floor(Math.random() * 3));

    console.log(`Question: ${num1} ${operation} ${num2}`);

    const answer = readlineSync.question('Your answer: ');

    if (compute(num1, num2, operation) === Number(answer)) {
      console.log('Correct!');
      correctCounter += 1;
    } else console.log(`${answer} is a wrong answer ;(. Correct answer was ${compute(num1, num2, operation)}.\nLet's try again, ${name}!`);
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainCalc;
