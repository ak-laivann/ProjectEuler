function findSumOfSquaresOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i * i;
  }
  return sum;
}

function findSquareOfSumOfNumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum * sum;
}

function bruteForceSolution(number) {
  console.time("BFS");

  const answer =
    findSquareOfSumOfNumbers(number) - findSumOfSquaresOfNumbers(number);

  console.timeEnd("BFS");

  return answer;
}

console.log(bruteForceSolution(100));

function optimizedSolution(number) {
  console.time("OPS");
  let sumOfSquare = 0;
  let squareOfSum = 0;

  for (let i = 1; i <= number; i++) {
    sumOfSquare += i * i;
    squareOfSum += i;
  }

  const answer = squareOfSum ** 2 - sumOfSquare;
  console.timeEnd("OPS");

  return answer;
}

console.log(optimizedSolution(100));
