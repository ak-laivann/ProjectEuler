function isPrime(element) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

function bruteForceSolution(number) {
  let count = 0;
  let iterable = 2;

  while (count < number) {
    if (isPrime(iterable)) {
      count++;
    }
    iterable++;
  }

  return iterable - 1;
}

console.log(bruteForceSolution(10001));
