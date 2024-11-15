import Undead from './Undead';

test('should throw error for long name length', () => {
  expect(() => new Undead('VeryLongName')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for shirt name length', () => {
  expect(() => new Undead('A')).toThrow('length must between 2 and 10 characters');
});

const character = new Undead('Robin');

test('should create Undead with valid name', () => {
    expect(character.name).toBe('Robin');
});

test('should create Undead with valid type', () => {
  expect(character.type).toBe('Undead');
});

test('should create Undead with validoptions', () => {
  const result = [character.attack, character.defence]
  expect(result).toStrictEqual([25, 25]);
});
