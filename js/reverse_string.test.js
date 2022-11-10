const reverse = require('./reverse_string');

test('String is not reverse', () => {
  expect(reverse.reverseString('Victoria')).toBe('airotciV')
})