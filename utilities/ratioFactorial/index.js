let factorialFunction = require("../factorial/index");
let ratioFunction = require("../ratio/index");

function ratioAndFactorial(num1, num2, num3) {
  let obj = {
    ratio: ratioFunction(num1, num2),
    factorial: factorialFunction(num3),
  };
  return obj;
}

module.exports = ratioAndFactorial;
