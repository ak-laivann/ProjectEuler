function generatePrimes(n) {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    if (i % 2 === 0 && i != 2) {
      isPrime = false;
    } else {
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

function primeFactorize(number, arrayOfPrimes) {
  let target = number;
  let primeFactors = {};

  for (let primeNumber of arrayOfPrimes) {
    if (primeNumber > target) {
      break;
    }

    while (target % primeNumber === 0) {
      if (primeFactors[primeNumber]) {
        primeFactors[primeNumber] += 1;
      } else primeFactors[primeNumber] = 1;

      target /= primeNumber;
    }

    if (target === 1) break;
  }

  return primeFactors;
}

function findLargestPrimes(results) {
  const maxValues = {};

  for (const obj of results) {
    for (const prime in obj) {
      const value = obj[prime];

      if (!maxValues[prime] || value > maxValues[prime]) {
        maxValues[prime] = value;
      }
    }
  }

  return maxValues;
}

function multiplyTheKeyValueTimes(factorPowerMap) {
  let value = 1;

  for (const [factor, power] of Object.entries(factorPowerMap)) {
    value *= factor ** power;
  }

  return value;
}

function bruteForceSolution(n) {
  console.time("BFS");
  const primeFactors = generatePrimes(n);

  const primeFactorsOfAllNumbers = [];

  for (let i = 1; i < n; i++) {
    const primeFactorsForTheNumber = primeFactorize(i, primeFactors);
    primeFactorsOfAllNumbers.push(primeFactorsForTheNumber);
  }

  const largestPrimes = findLargestPrimes(primeFactorsOfAllNumbers);

  console.timeEnd("BFS");
  return multiplyTheKeyValueTimes(largestPrimes);
}

console.log(bruteForceSolution(20));
