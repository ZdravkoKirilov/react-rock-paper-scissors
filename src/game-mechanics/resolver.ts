import { WeaponType, Weapons } from './weapons';
import { Balance } from './power-balance';
import { getRandomWeapon } from './randomize';

export const resultTypes = {
    DRAW: 'Draw',
    WIN: 'Win',
    LOSS: 'Loss'
};

export type ResultType = typeof resultTypes.DRAW | typeof resultTypes.WIN | typeof resultTypes.LOSS;

export interface RoundResult {
    result: ResultType;
    opponentPick: WeaponType;
}

export const resolveWinner = (weapon1: WeaponType, weapon2: WeaponType, balance: Balance): ResultType => {
    if (weapon1 === weapon2) {
        return resultTypes.DRAW;
    }
    return balance[weapon1].beats.every(loser => loser === weapon2) ? resultTypes.WIN : resultTypes.LOSS;
};

export const playRound = (pickedWeapon: WeaponType, allWeapons: Weapons, balance: Balance): RoundResult => {
    const randomWeapon = getRandomWeapon(allWeapons);
    return {
        result: resolveWinner(pickedWeapon, randomWeapon, balance),
        opponentPick: randomWeapon
    };
};