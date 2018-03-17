export const weapons = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors'
};

export interface Weapons {
    [key: string]: WeaponType;
}

export type WeaponType = typeof weapons.ROCK | typeof weapons.PAPER | typeof weapons.SCISSORS;