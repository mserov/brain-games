import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const engine = (rules, generateQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);

  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!\n`);

  let correctCounter = 0;

  while (correctCounter < 3) {
    const questionAnswer = generateQuestionAnswer();
    const question = car(questionAnswer);
    const correctAnswer = cdr(questionAnswer);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      correctCounter += 1;
    } else console.log(`${answer} is a wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
  }

  console.log(`Congratulations, ${name}!`);
};

export default engine;
