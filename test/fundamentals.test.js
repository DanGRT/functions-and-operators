const {
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
} = require("../src/fundamentals");

test("add - 1", () => {
  const result = add(2, 3);

  expect(result).toEqual(5);
});

test("add - 2", () => {
  const result = add(7, 2);

  expect(result).toEqual(9);
});

test("addArrow - 1", () => {
  const result = addArrow(1, 6);

  expect(result).toEqual(7);
});

test("addArrow - 2", () => {
  const result = addArrow(4, 7);

  expect(result).toEqual(11);
});

test("addSingleLineArrow - 1", () => {
  const result = addSingleLineArrow(5, 5);

  expect(result).toEqual(10);
});

test("addSingleLineArrow - 2", () => {
  const result = addSingleLineArrow(4, 8);

  expect(result).toEqual(12);
});

test("remainder - 1", () => {
  const result = remainder(14, 3);

  expect(result).toEqual(2);
});

test("remainder - 2", () => {
  const result = remainder(27, 8);

  expect(result).toEqual(3);
});

test("exponential - 1", () => {
  const result = exponential(4, 3);

  expect(result).toEqual(64);
});

test("exponential - 2", () => {
  const result = exponential(5, 2);

  expect(result).toEqual(25);
});

test("smaller - 1", () => {
  const result = smaller(23, 22);

  expect(result).toEqual(22);
});

test("smaller - 2", () => {
  const result = smaller(11, 19);

  expect(result).toEqual(11);
});

test("smaller - 3", () => {
  const result = smaller(13, 13);

  expect(result).toEqual(false);
});

test("circumference - 1", () => {
  const result = circumference(5);

  expect(result).toEqual("15.708");
});

test("circumference - 2", () => {
  const result = circumference(11);

  expect(result).toEqual("34.558");
});

test("countOnes - 1", () => {
  const result = countOnes("101");

  expect(result).toEqual(2);
});

test("countOnes - 2", () => {
  const result = countOnes("01010101");

  expect(result).toEqual(4);
});

test("dateFormat - 1", () => {
  const result = dateFormat("03-11-2018");

  expect(result).toEqual("3 November 2018");
});

test("dateFormat - 2", () => {
  const result = dateFormat("12-03-2017");

  expect(result).toEqual("12 March 2017");
});

test("multiplyAll - 1", () => {
  const result = mulitplyAll([1, 2, 3]);

  expect(result).toEqual(6);
});

test("multiplyAll - 2", () => {
  const result = mulitplyAll([3, 5, 2]);

  expect(result).toEqual(30);
});

test("largestArea - 1", () => {
  const result = largestArea([[4, 2], [7, 1], [5, 5]]);

  expect(result).toEqual(25);
});

test("largestArea - 2", () => {
  const result = largestArea([[2, 2], [2, 12], [3, 7], [8, 3]]);

  expect(result).toEqual(24);
});
