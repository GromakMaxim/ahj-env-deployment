import demo from '../app';

test('input 20 expected 20', () => {
  const actual = demo(20);
  const expected = 20;
  expect(actual).toEqual(expected);
});
