import identifyTechnologies from './index';

test('Identify technologies based on text', () => {
  const tech = identifyTechnologies('hello world React Nodejs PHP');

  expect(tech).toEqual(['react', 'nodejs', 'php'])
})
test('Technologies are unique', () => {
  const tech = identifyTechnologies('hello world React Nodejs PHP React Nodejs PHP');

  expect(tech).toEqual(['react', 'nodejs', 'php'])
})