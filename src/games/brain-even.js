import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if tne number is even otherwise answer "no".\n');
  console.log('May I have your name?');

  const name = readlineSync.question('Your answer: ');

  console.log(`Hello, ${name}!\n`);

  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }

    return 'no';
  };

  let correctCounter = 0;

  while (correctCounter < 3) {
    const maxNum = 1000;
    const num = Math.floor(Math.random() * maxNum);
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    // if (answer !== 'yes' && answer !== 'no') console.log(`Wrong input, ${name}!`);

    if (isEven(num) === answer) {
      console.log('Correct!');
      correctCounter += 1;
    } else console.log(`${answer} is a wrong answer ;(. Correct answer was ${isEven(num)}.\nLet's try again, ${name}!`);
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
