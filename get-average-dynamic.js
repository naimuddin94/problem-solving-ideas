//  get average number function

function getAverage(...args) {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  const average = parseFloat(total / arguments.length);
  const finalAverage = average.toFixed(2);
  console.log(total);
  console.log(`Average mark is ${finalAverage}`);
}

getAverage(56, 24, 26, 58);
