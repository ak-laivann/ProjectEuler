function bruteForceSolution() {
  console.time("BFS");
  let answer = null;
  for (let a = 1; a <= 333; a++) {
    for (let b = a + 1; b <= 1000 - a - 1; b++) {
      const c = 1000 - a - b;

      if (c * c === a * a + b * b) {
        answer = a * b * c;
        console.timeEnd("BFS");
        return a * b * c; // since in the question, there was this keyword that there is only one pythagorean triplet to satisfy both the conditions
      }
    }
  }

  console.timeEnd("BFS");
  return answer;
}

console.log(bruteForceSolution());
