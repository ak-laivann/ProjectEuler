function createFibonacci(limit) {
  let fibonacciArray = [1, 2];

  console.time("creating fibonacci");

  while (true) {
    let nextNumber =
      fibonacciArray[fibonacciArray.length - 1] +
      fibonacciArray[fibonacciArray.length - 2];

    if (nextNumber > limit) break;

    fibonacciArray.push(nextNumber);
  }

  console.timeEnd("creating fibonacci");
  return fibonacciArray;
}

function bruteForceSolution(limit) {
  let sum = 0;

  console.time("Brute Force Solution");

  const fibonacciArray = createFibonacci(limit);

  for (let index = 0; index < fibonacciArray.length; index++) {
    if (fibonacciArray[index] % 2 === 0) {
      sum += fibonacciArray[index];
    }
  }

  console.timeEnd("Brute Force Solution");

  return sum;
}

console.log(bruteForceSolution(4000000));

// Computer Science Concept
/* 
    The problem of having an array and also iterating through them conditionally, 
    can be overcome if we could get only the elements 
    and even better if we can get only the even elements.

    The pattern of 

    1,2,3,5,8,13,21,34,55,89,144,...

    has even elements only on every three indexes if they can be considered as an array.

    But that amount of brain i don't have. - As of now.

    So, instead we could use swapping of variables - not two by leveraging the overwriting of let in javascript.
*/

function optimizedSolutionUsingSwapping(limit) {
  let sum = 0;
  let secondLastNumber = 1;
  let lastNumber = 2;

  console.time("Optimized Solution Time");

  while (lastNumber <= limit) {
    if (lastNumber % 2 === 0) {
      sum += lastNumber;
    }

    let nextNumber = secondLastNumber + lastNumber;

    secondLastNumber = lastNumber; // second last number changes
    lastNumber = nextNumber; // last number changes to the updated one
  }

  console.timeEnd("Optimized Solution Time");
  return sum;
}

console.log(optimizedSolutionUsingSwapping(4000000));
