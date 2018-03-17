import { ResultType, WeaponType } from '../game-mechanics';

export interface Player {
    score: number;
    lastPick?: WeaponType;
}

export interface State {
    player: Player;
    opponent: Player;
    rounds: number;
    status: ResultType;
}

export const initialState: State = {
    player: {
        score: 0,
        lastPick: ''
    },
    opponent: {
        score: 0,
        lastPick: ''
    },
    rounds: 0,
    status: ''
};