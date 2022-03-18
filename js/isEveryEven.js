// number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd
// number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even
// number = 5 => returns false
// number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
// number = 1234 => returns true -> 1 + 2 + 3 + 4 = 10 -> 1 + 3 => 4 is even

function isVeryEvenNumber(n) {
  if (n < 10) {
    if (isEven(n)) {
      return true;
    }
    return false;
  }
  let numberArray = n.toString().split("");
  let result = 0;
  numberArray.forEach((num) => {
    result += Number(num);
  });
  return isVeryEvenNumber(result);
}

function isEven(number) {
  return number % 2 == 0;
}
