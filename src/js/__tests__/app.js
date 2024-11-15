import character from '../app';

test('should create a Bowerman character with correct properties', () => {
  const result = {
    name: character.name,
    t: character.type,
    health: character.health,
    level: character.level,
    attack: character.attack,
    defence: character.defence
  }

  const expectedResult = {
    name: 'Robin',
    t: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }
    expect(result).toStrictEqual(expectedResult);
  });
