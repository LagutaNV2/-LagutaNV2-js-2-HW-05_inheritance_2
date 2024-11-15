import Character from '../Character';

test('invalid length name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('length must between 2 and 10 characters');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('Robin', 'InvalidType')).toThrow('Type must be one of Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('level up correct', () => {
  const character = new Character('Robin', 'Bowman');
  character.attack = 10;
  character.defence = 10;

  character.levelUp();
  const result = [character.level, character.attack, character.defence, character.health]

  expect(result).toStrictEqual([2, 12, 12, 100]);
});

test('level up for dead', () => {
  const character = new Character('Robin', 'Bowman');
  character.health = 0;

  expect(() => character.levelUp()).toThrow("Can't for dead");
});

test('correct calculate damage', () => {
  const character = new Character('Robin', 'Bowman');
  character.defence = 20;

  character.damage(50);

  expect(character.health).toBe(60); // 100 - (50 * (1 - 0.2)) = 60
});

test('calculate damage to health < 0', () => {
  const character = new Character('Robin', 'Bowman');
  character.defence = 20;

  character.damage(500);

  expect(character.health).toBe(0);
});

test('damage throws error if health is 0', () => {
  const character = new Character('Hero', 'Bowman');
  character.health = 0;

  expect(() => character.damage(50)).toThrow("Can't for health <= 0");
});
