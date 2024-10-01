// Solution Concept
/* 
    The prime factor can be obtained by first divinding by 2 if it is divisible or by 3 continuously till the remainder is not zero.
    By this time the remainder will most likely be the prime number by itself.
    If it is not divisible by 3 then we can skip all those even numbers and then go ahead with all those odd numbers.

    Finally, we can see whether the remainder, which has already been assigned the value of factor if conditions are met, is greater than 2.
    If it is greater than 2 then we can assign the remainder as answer (as previously said that it was a prime number).
    Else then we can assign the value of the last factor that was assigned.

    Note that this code works only for perfectly divisible number. (as far as i know)
*/

function bruteForceSolution(target) {
  console.time("Brute Force Solution");
  let remainder = target;

  while (remainder % 2 == 0) {
    remainder = Math.floor(remainder / 2);
  }

  let factor = 3;
  while (factor * factor <= remainder) {
    while (remainder % factor == 0) {
      remainder = Math.floor(remainder / factor);
    }
    factor += 2;
  }

  let answer = 0;
  if (remainder > 2) {
    answer = remainder;
  } else answer = factor;

  console.timeEnd("Brute Force Solution");

  return answer;
}

console.log("Brute Force Solution is", bruteForceSolution(600851475143));
