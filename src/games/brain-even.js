import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if tne number is even otherwise answer "no".\n');
  console.log('May I have your name?');

  const name = readlineSync.question('Your answer: ');

  console.log(`Hello, ${name}!\n`);

  const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }

    return false;
  };

  let correctCounter = 0;

  while (correctCounter < 3) {
    const maxNum = 1000;
    const num = Math.floor(Math.random() * maxNum);
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== 'yes' && answer !== 'no') console.log(`Wrong input, ${name}!`);

    if ((isEven(num) === true && answer === 'yes') || (isEven(num) === false && answer === 'no')) {
      console.log('Correct!');
      correctCounter += 1;
    } else if (isEven(num) === true && answer === 'no') {
      console.log(`'no' is a wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    } else if (isEven(num) === false && answer === 'yes') {
      console.log(`'yes' is a wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
