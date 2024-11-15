import Magician from '../Magician';

test('should throw error for invalid name length', () => {
  expect(() => new Magician('VeryLongName')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for invalid name length', () => {
  expect(() => new Magician('A')).toThrow('length must between 2 and 10 characters');
});

const character = new Magician('Robin');

test('should create Magician with valid name and type', () => {
    expect(character.name).toBe('Robin');
});

test('should create Magician with valid name and type', () => {
  expect(character.type).toBe('Magician');
});

test('should create Magician with valid name and type', () => {
  const result = [character.attack, character.defence]
  expect(result).toStrictEqual([10, 40]);
});
