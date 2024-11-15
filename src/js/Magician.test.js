import Magician from './Magician';

test('should throw error for long name length', () => {
  expect(() => new Magician('VeryLongName')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for shirt name length', () => {
  expect(() => new Magician('A')).toThrow('length must between 2 and 10 characters');
});

const character = new Magician('Robin');

test('should create Magician with valid name', () => {
    expect(character.name).toBe('Robin');
});

test('should create Magician with valid type', () => {
  expect(character.type).toBe('Magician');
});

test('should create Magician with valid options', () => {
  const result = [character.attack, character.defence]
  expect(result).toStrictEqual([10, 40]);
});
