function add(a, b) {
  // add the two arguments and return the sum
  return a + b;
}

const addArrow = (a, b) => {
  return a + b;
};


// add the two arguments and return the sum
const addSingleLineArrow = (a, b) => a + b;


// return the remainder of number
// when divided by divisor
const remainder = (number, divisor) => number % divisor;



// this function is passed 2 arguments
// return first argument to the power of second argument
// hint: you may need to look up the exponention operator
const exponential = (number, exponent) => number ** exponent;


// function receives two numbers as arguments
// return smaller number
// if numbers are the same return `false`
const smaller = (a, b) => {
  if (a > b) {
    return b;
  } else if (b > a) {
    return a;
  } else {
    return false;
  }
};


  // function receives the diameter
  // calculate the circumference of the circle
  // return number as a string with 3 decimal places

const circumference = diameter => {
  const circ = diameter * Math.PI;

  return circ.toFixed(3);
};

// Rewrite function as arrow function
// function countOnes(onesAndZeros) {
//   // onesAndZeros is a string which contains only `1` and `0`
//   // return the number of `1`s in the string
//   const result = onesAndZeros.split("");
//
//   const ones = result.filter(i => i === "1");
//   console.log(result);
//
//   return ones.length;
// }

const countOnes = onesAndZeros => {
  const result = onesAndZeros.split("");
  const ones = result.filter(i => i === "1");
  console.log(result);

  return ones.length;
};

// Rewrite function as arrow function
// function dateFormat(date) {
//   // const monthNames = [
//   //   "January",
//   //   "February",
//   //   "March",
//   //   "April",
//   //   "May",
//   //   "June",
//   //   "July",
//   //   "August",
//   //   "September",
//   //   "October",
//   //   "November",
//   //   "December"
//   // ];
//   // const dateArray = date.split("-");
//   // const indexMonth = dateArray[1] - 1;
//   //
//   //
//   // return `${parseInt(dateArray[0])} ${monthNames[indexMonth]} ${dateArray[2]}`;
// }

const dateFormat = date => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dateArray = date.split("-");
  const indexMonth = dateArray[1] - 1;

  return `${parseInt(dateArray[0])} ${monthNames[indexMonth]} ${dateArray[2]}`;
};

// console.log(date.getMonth());

// function receives a date as a string
// in the format yyyy-mm-dd
// return date in format d mmmm yyyy
// for example '03-11-2018' becomes '3 November 2018'
// hint: you may want to use the string method `split`.

// Rewrite function as arrow function
// function mulitplyAll(numbers) {
//   // numbers is an array of numbers
//   // multiply all numbers in array
//   // and return the product
//   return numbers.reduce(
//     (accumulator, currentValue) => accumulator * currentValue
//   );
// }

const mulitplyAll = numbers => {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
};

// Rewrite function as arrow function
// function largestArea(rectangles) {
//   const rectAreas = rectangles.map(rect => rect[0] * rect[1]);
//   console.log(rectAreas);
//   return Math.max(...rectAreas);
//   // rectangles is an array of arrays,
//   // where the inner contains two numbers
//   // the first number is the height of a rectangle and
//   // the second number is the width of a rectangle
//   // for example [[4,2], [7, 1], [5, 5]] return 25
//   // return the area of the largest rectangle
// }

const largestArea = rectangles => {
  const rectAreas = rectangles.map(rect => rect[0] * rect[1]);
  return Math.max(...rectAreas);
};

module.exports = {
  add,
  addArrow,
  addSingleLineArrow,
  remainder,
  exponential,
  smaller,
  circumference,
  countOnes,
  dateFormat,
  mulitplyAll,
  largestArea
};
