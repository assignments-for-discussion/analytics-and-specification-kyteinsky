
function average(numbers) {
  numbers = numbers.filter(n => !isNaN(n));
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};

