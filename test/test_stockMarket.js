// test arrays with multiple profit potentials.
// test single entry arrays.
// test empty arrays.
// test invalid arrays.

var assert = require("chai").assert;
var maxPotential = require("../lib/stockMarket");

describe("is the potential return calculated correctl?", function() {

  it("should return true output correct.", function() {
    var stockPrices = [45, 24, 35, 31, 40, 38, 11];
    var correctOutput = 16;
    var result = maxPotential(stockPrices);
    console.log("your code's result is: " + result + " | correct answer is: " + correctOutput);
    assert.equal(correctOutput,result);
  });

  it("should return true output correct.", function() {
    var stockPrices = [99, 100, 2, 6, 2, 2, 2];
    var correctOutput = 4;
    var result = maxPotential(stockPrices);
    console.log("your code's result is: " + result + " | correct answer is: " + correctOutput);
    assert.equal(correctOutput,result);
  });

  it("should return true output correct.", function() {
    var stockPrices = [99];
    var correctOutput = 0;
    var result = maxPotential(stockPrices);
    console.log("your code's result is: " + result + " | correct answer is: " + correctOutput);
    assert.equal(correctOutput,result);
  });

  it("should return true output correct.", function() {
    var stockPrices = [99, 95, 90, 2];
    var correctOutput = 0;
    var result = maxPotential(stockPrices);
    console.log("your code's result is: " + result + " | correct answer is: " + correctOutput);
    assert.equal(correctOutput,result);
  });

  it("should return true output correct.", function() {
    var stockPrices = [99, 95, 90, 2, 5, 4];
    var correctOutput = 3;
    var result = maxPotential(stockPrices);
    console.log("your code's result is: " + result + " | correct answer is: " + correctOutput);
    assert.equal(correctOutput,result);
  });

  it("should return true output correct.", function() {
    var stockPrices = [];
    var correctOutput = "Invalid entry!";
    var result = maxPotential(stockPrices);
    console.log("your code's result is: " + result + " | correct answer is: " + correctOutput);
    assert.equal(correctOutput,result);
  });

  it("should return true output correct.", function() {
    var stockPrices = [1,5,'x',10];
    var correctOutput = "Invalid entry!";
    var result = maxPotential(stockPrices);
    console.log("your code's result is: " + result + " | correct answer is: " + correctOutput);
    assert.equal(correctOutput,result);
  });

});