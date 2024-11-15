import Bowerman from '../Bowerman';

test('should throw error for invalid name length', () => {
  expect(() => new Bowerman('VeryLongName')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for invalid name length', () => {
  expect(() => new Bowerman('A')).toThrow('length must between 2 and 10 characters');
});

const character = new Bowerman('Robin');

test('should create Bowerman with valid name and type', () => {
    expect(character.name).toBe('Robin');
});

test('should create Bowerman with valid name and type', () => {
  expect(character.type).toBe('Bowman');
});

test('should create Bowerman with valid name and type', () => {
  const result = [character.attack, character.defence]
  expect(result).toStrictEqual([25, 25]);
});
