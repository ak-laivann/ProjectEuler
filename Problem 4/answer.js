// Brute force solution

/*
    The largest palindrome created by three digit numbers,

    For this, lets create one helper function called check if it is a palindrome.

    Then another to check whether the obtained number is the largest obtained as of now.

    We will loop from largest three digit number to the smallest one.

    Once a palindrome is obtained, it should be added as the largest palindrome.
*/

function checkIfTheNumberIsAPalindrome(number) {
  let numberAsString = number.toString();

  let reversedNumberAsString = numberAsString.split("").reverse().join("");

  return numberAsString === reversedNumberAsString;
}

function returnTheGreaterPalindrome(obtainedPalindrome, storedPalindrome) {
  let returnablePalindrome = storedPalindrome;

  if (obtainedPalindrome > storedPalindrome) {
    returnablePalindrome = obtainedPalindrome;
  }

  return returnablePalindrome;
}

function bruteForceSolution() {
  console.time("BFS");
  let storedPalindrome = 0;

  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      let multipliedValue = j * i;
      if (checkIfTheNumberIsAPalindrome(multipliedValue)) {
        storedPalindrome = returnTheGreaterPalindrome(
          multipliedValue,
          storedPalindrome
        );
      }
    }
  }

  console.timeEnd("BFS");
  return storedPalindrome;
}

console.log(bruteForceSolution());

/*
    There are certain steps that could speed up the process of this brute force solution.

    1. Leveraging the concepts of palindrome, 
        we can check if the first digit is not equal to the last digit and so on, 
        it could be identified whether or not it is a palindrome.
    2. We can exit the inner loop early by checking if the current product is smaller than the stored value, 
        since we are decreasing the values on each iteration, 
        there is no way that it would be greater than the stored value.
    3. We can set the value of j to i, so that commutative property can be leveraged.
        As in, there is no need to check the 900*800 and 800*900
*/

function optimizedSolution() {
  console.time("OPS");
  let storedPalindrome = 0;

  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      // reduces the rechecking one since there is no way that the j can be greater than i
      let multipliedValue = i * j;

      if (checkIfTheNumberIsAPalindrome(multipliedValue)) {
        if (multipliedValue < storedPalindrome) {
          break;
        }
        if (multipliedValue > storedPalindrome) {
          storedPalindrome = multipliedValue;
        }
      }
    }
  }

  console.timeEnd("OPS");
  return storedPalindrome;
}

console.log(optimizedSolution());
