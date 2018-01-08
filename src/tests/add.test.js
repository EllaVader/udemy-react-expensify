const add = (a,b) => a + b;

const generateGreeting = (name = 'Anonymous') => `hello ${name}!`;

// there are global variables that jest provides us that we can access.
// 'test' is one of them - 2 required arguments - first is name and 2nd is code to the test to run.
// 'expect' is another jest thing we have for testing.
test('should add 2 numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return name from greeting', () => {
  const greeting = generateGreeting('Janine');
  expect(greeting).toBe('hello Janine!');
});

test('should return Anonymous for no name in greeting', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('hello Anonymous!');
});