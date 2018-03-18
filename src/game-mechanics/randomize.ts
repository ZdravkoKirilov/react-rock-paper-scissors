import { WeaponType, Weapons } from './weapons';

// return one of: ROCK / PAPER / SCISSORS
export const getRandomWeapon = (weapons: Weapons): WeaponType => {
    const values = Object.values(weapons);
    const option = values[Math.floor(Math.random() * values.length)];
    return option;
};