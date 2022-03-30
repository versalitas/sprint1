
const {sumNums, substractNums, multiplyNums, divideNums} = require('./calculator.js');

//tests

test('adds 1 + 2 to equal 3', () => {
 expect(sumNums(1, 2)).toBe(3);
});

test('substracts 1 from 2 to equal 1'), () => {
 expect(substractNums(2, 1).toBe(1));
}

test('multiplies 2 with 2 to equal 4'), () => {
  expect(multiplyNums(2, 1).toBe(1));
}

test('divides 4 with 2 to equal 2'), () => {
  expect(divideNums(4, 2).toBe(2));}