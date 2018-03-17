import { WeaponType } from '../../game-mechanics';

export const UPDATE_PLAYER_SCORE = '[PLAYER]UPDATE_SCORE';
export const UPDATE_PLAYER_LAST_PICK = '[PLAYER]UPDATE_LAST_PICK';

export interface PlayerAction {
    type: typeof UPDATE_PLAYER_SCORE | typeof UPDATE_PLAYER_LAST_PICK;
    payload?: WeaponType;
}

export const updatePlayerScore = (): PlayerAction => ({ type: UPDATE_PLAYER_SCORE });
export const updatePlayerLastPick = (payload: WeaponType): PlayerAction => ({ type: UPDATE_PLAYER_LAST_PICK, payload });
