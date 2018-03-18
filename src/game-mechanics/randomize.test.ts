import { getRandomWeapon } from './randomize';
import { weapons } from './weapons';

it('Picks a random weapon', () => {
    const random = getRandomWeapon(weapons);
    const asArray = Object.values(weapons);
    expect(asArray.includes(random)).toBe(true);
});
