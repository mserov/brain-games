import readlineSync from 'readline-sync';

export const interfaceAll = (rules, generateQuestion, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);

  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!\n`);

  let correctCounter = 0;

  while (correctCounter < 3) {
    const question = generateQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer(question) === answer) {
      console.log('Correct!');
      correctCounter += 1;
    } else console.log(`${answer} is a wrong answer ;(. Correct answer was ${correctAnswer(question)}.\nLet's try again, ${name}!`);
  }

  console.log(`Congratulations, ${name}!`);
};

//const name = getName();
