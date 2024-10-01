function isPrime(element) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

function bruteForceSolution(limit) {
  console.time("BFS");
  const arr = [...Array(limit).keys()].filter(isPrime);

  let sum = 0;

  for (let number of arr) {
    sum += number;
  }

  console.timeEnd("BFS");
  return sum;
}

console.log(bruteForceSolution(2000000));
