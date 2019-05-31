

let validate = function(numberToCheck) {
  let numberCheck = numberToCheck.split("");
  for (let i = numberToCheck.length - 2; i >= 0; i = i-2) {
    numberCheck[i] = (numberCheck[i] * 2);
    if (numberCheck[i] > 9) {
      numberCheck[i] = numberCheck[i] - 9;
    }

  }
  let summOfNumbers = 0;

  for (let numbers of numberCheck) {
    summOfNumbers += Number(numbers);

  }
  return !(summOfNumbers %10);



}



module.exports = {
  validate: validate
}