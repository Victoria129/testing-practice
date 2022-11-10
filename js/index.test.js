const length = require('./index')

test('Returns the length of a string', () => {
  expect(length.stringLength('Victoria')).toBe(8)
});

test('Returns an error if the string is too short or too long', () => {
  expect(length.stringLength('')).toBe(Error);
  expect(length.stringLength('VictoriaWonder')).toBe(Error)
});

