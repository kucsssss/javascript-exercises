const add = function(num1, num2) {
    let addResult = num1 + num2	
    return addResult
};

const subtract = function(num1, num2) {
    let subtractResult = num1 - num2
    return subtractResult

};

const sum = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];  
    }
    return sum;
	
};

const multiply = function() {


};

const power = function(alap, kitevo) {
      let result = 1;
      for (let i = 0; i < kitevo; i++) {
        result = result * alap;
      }
      return result;
};

const factorial = function(num) {
      if(num === 0){
        return 1;
      }
      let result = 1;

      for (let i = num; i > 0; i--) {
        result *= i;
      }
      return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
