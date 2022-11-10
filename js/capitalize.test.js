const upperCase = require('./capitalize');

test('Capitalize first letter', () => {
  expect(upperCase.Capitalize('victoria')).toBe('Victoria');
})