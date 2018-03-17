import { weapons, WeaponType } from './weapons';

export const balance: Balance = {
    [weapons.ROCK]: {
        beats: [weapons.SCISSORS]
    },
    [weapons.PAPER]: {
        beats: [weapons.ROCK]
    },
    [weapons.SCISSORS]: {
        beats: [weapons.PAPER]
    }
};

export interface Balance {
    [key: string]: {
        beats: WeaponType[];
    };
}
