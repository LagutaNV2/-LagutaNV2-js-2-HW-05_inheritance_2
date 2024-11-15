import Daemon from './Daemon';

test('should throw error for long name length', () => {
  expect(() => new Daemon('VeryLongName')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for shirt name length', () => {
  expect(() => new Daemon('A')).toThrow('length must between 2 and 10 characters');
});

const character = new Daemon('Robin');

test('should create Daemon with valid name', () => {
    expect(character.name).toBe('Robin');
});

test('should create Daemon with valid type', () => {
  expect(character.type).toBe('Daemon');
});

test('should create Daemon with valid options', () => {
  const result = [character.attack, character.defence]
  expect(result).toStrictEqual([10, 40]);
});
