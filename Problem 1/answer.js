function bruteForceSolution(propNumber) {
  console.time("Brute Force Solution Time");

  let sum = 0;
  for (let presentNumber = 0; presentNumber < propNumber; presentNumber++) {
    if (presentNumber % 3 === 0 || presentNumber % 5 === 0) {
      sum += presentNumber;
    }
  }

  console.timeEnd("Brute Force Solution Time");
  return sum;
}

// Solution Concept
/*
  This problem involves Arithmetic Progression ->
  The difference between two numbers is always the same.

  So, second type of solution would be to
  find the sum of arithmetic progression of 3 and 5
  and then subtract the sum of arithmetic progression of 15.
*/

// Mathematical Concept
/*
  *Arithmetic Progression*

  Lets say that the first element is $a$.
  The difference between any two numbers in the series is $d$.
  Number of elements in the series is $n$.
  The Sum of all the numbers till the limit is $S(n)$.

  Now, consider this.

  S(n) = a + (a + d) + (a + 2(d)) + ... + (a + (n-2)d) + (a + (n-1)d).

  Re-arranging them in reverse order we will get the same result since addition is commutative.

  S(n) = (a + (n-1)d) + (a + (n-2)d) + ... + (a + 2(d)) + (a + d) + a.

  Adding these two,

  2 * S(n) = (a + (a + (n-1)d)) + ((a + d) + (a + (n-2)d)) + ((a + (n-2)d) + (a + 2(d))) + ... + ((a + (n-1)d) + a)

  2 * S(n) = n * (2a + (n-1)d)

  S(n) = n * (2a + (n-1)d) / 2
*/

function sumOfArithmeticProgression(firstNumber, difference, limit) {
  let numberOfTerms = Math.floor((limit - 1) / difference);
  let lastNumber = firstNumber + (numberOfTerms - 1) * difference;
  let sumOfSeries = (numberOfTerms * (firstNumber + lastNumber)) / 2;
  return sumOfSeries;
}

function optimizedSolutionUsingArithmeticProgression(limit) {
  console.time("Optimized Solution Time");

  let sumOfMultiplesOf3 = sumOfArithmeticProgression(3, 3, limit);
  let sumOfMultiplesOf5 = sumOfArithmeticProgression(5, 5, limit);
  let sumOfMultiplesOf15 = sumOfArithmeticProgression(15, 15, limit);
  let result = sumOfMultiplesOf3 + sumOfMultiplesOf5 - sumOfMultiplesOf15;

  console.timeEnd("Optimized Solution Time");
  return result;
}

console.log("BruteForce Answer = ", bruteForceSolution(1000));
console.log(
  "Optimzed Solution Answer = ",
  optimizedSolutionUsingArithmeticProgression(1000)
);

// Computer Science Concept
/*
  Since there is no iteration, the compiler doesnt have to wait for the iteration to finish. 
  and since there is no if condition, there is no overhead.
*/
