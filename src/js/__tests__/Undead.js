import Undead from '../Undead';

test('should throw error for invalid name length', () => {
  expect(() => new Undead('VeryLongName')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for invalid name length', () => {
  expect(() => new Undead('A')).toThrow('length must between 2 and 10 characters');
});

const character = new Undead('Robin');

test('should create Undead with valid name and type', () => {
    expect(character.name).toBe('Robin');
});

test('should create Undead with valid name and type', () => {
  expect(character.type).toBe('Undead');
});

test('should create Undead with valid name and type', () => {
  const result = [character.attack, character.defence]
  expect(result).toStrictEqual([25, 25]);
});
