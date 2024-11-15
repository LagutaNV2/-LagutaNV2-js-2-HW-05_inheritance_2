import Swordsman from './Swordsman';

test('should throw error for long name length', () => {
  expect(() => new Swordsman('VeryLongName')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for shirt name length', () => {
  expect(() => new Swordsman('A')).toThrow('length must between 2 and 10 characters');
});

const character = new Swordsman('Robin');

test('should create Swordsman with valid name', () => {
    expect(character.name).toBe('Robin');
});

test('should create Swordsman with valid type', () => {
  expect(character.type).toBe('Swordsman');
});

test('should create Swordsman with valid options', () => {
  const result = [character.attack, character.defence]
  expect(result).toStrictEqual([40, 10]);
});
