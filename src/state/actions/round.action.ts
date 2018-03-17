export const ADD_ROUND = 'ADD_ROUND';

export interface AddRoundAction {
    type: typeof ADD_ROUND;
}

export const addRound = (): AddRoundAction => ({ type: ADD_ROUND });