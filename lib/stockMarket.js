// var stockPrices = [99, 100, 2, 6, 'x', 2, 2];
// var stockPrices = ['x', 'y'];

function maxPotential (arr) {

  // find maximum value in a number array
  function max(arr) {
    var max = arr[0];
    for (item of arr) {
      max = Math.max(max, item);
    }
    return max;
  }

  // finds min value in a number array
  function min(arr) {
    var min = arr[0];
    for (item of arr) {
      min = Math.min(min, item);
    }
    return min;
  }

  // array of all profit potentials within a stock price array
  var potentials = [];

  // recursive function that finds all profit potentials
  // using divide and conquer
  function findPotential(arr) {
    if (arr.length !== 0) {
      var minValue = min(arr);
      var tempArrRight = arr.slice(arr.indexOf(minValue));
      var tempArrLeft = arr.slice(0, arr.indexOf(minValue));
      var maxValue = max(tempArrRight);
      potentials.push(maxValue - minValue);
      findPotential(tempArrLeft);
    } else return;
  }

  // checks the validity of input
  function checkInput (arr) {
    var goodInput = true;
    if (arr.length === 0) goodInput = false;
    else {
      for (item of arr) {
        if (typeof(item) !== 'number') goodInput = false;
      }
    } return goodInput;
  }

  if (checkInput(arr)) findPotential(arr);
  else return "Invalid entry!";

  return max(potentials);
}

//console.log(maxPotential(stockPrices));

module.exports = maxPotential;