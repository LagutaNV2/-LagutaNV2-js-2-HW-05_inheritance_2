import Zombie from './Zombie';

test('should throw error for long name length', () => {
  expect(() => new Zombie('VeryLongName')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for shirt name length', () => {
  expect(() => new Zombie('A')).toThrow('length must between 2 and 10 characters');
});

const character = new Zombie('Robin');

test('should create Zombie with valid name and type', () => {
    expect(character.name).toBe('Robin');
});

test('should create Zombie with valid name', () => {
  expect(character.type).toBe('Zombie');
});

test('should create Zombie with valid type', () => {
  const result = [character.attack, character.defence]
  expect(result).toStrictEqual([40, 10]);
});
