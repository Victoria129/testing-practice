const calculate = require('./calc.js');

describe('Caliculates', () => {
test('sum', () => {
  expect(calculate.add(2,3)).toBe(5);
  expect(calculate.add(10,3)).toBe(13);
  expect(calculate.add(2,5)).toBe(7);
});

test('difference', () => {
  expect(calculate.subtract(2,3)).toBe(-1);
  expect(calculate.subtract(6,3)).toBe(3);
  expect(calculate.subtract(12,4)).toBe(8);
  expect(calculate.subtract(22,3)).toBe(19);
});

test('product', () => {
  expect(calculate.multiply(3,7)).toBe(21);
  expect(calculate.multiply(5,4)).toBe(20);
  expect(calculate.multiply(30,17)).toBe(510);
});

test('quotient', () => {
  expect(calculate.divide(4,2)).toBe(2);
  expect(calculate.divide(8,4)).toBe(2);
  expect(calculate.divide(100,10)).toBe(10);
}); 
});