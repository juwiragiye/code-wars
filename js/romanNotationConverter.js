function solution(roman) {
  let data = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let numbers = [...roman.split("")];

  function checkGreater(a, b) {
    if (a < b) {
      return -a;
    }
    return a;
  }

  let sum = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    let curr = data[numbers[i]];
    let next = data[numbers[i + 1]];
    sum.push(checkGreater(curr, next));
  }
  sum.push(data[numbers[numbers.length - 1]]);
  return sum.reduce((a, b) => a + b);
}
