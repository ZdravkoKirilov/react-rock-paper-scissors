import { WeaponType, Weapons } from './weapons';

export const getRandomWeapon = (weapons: Weapons): WeaponType => {
    const options = Object.keys(weapons);
    const option = options[Math.floor(Math.random() * options.length)];
    return weapons[option];
};