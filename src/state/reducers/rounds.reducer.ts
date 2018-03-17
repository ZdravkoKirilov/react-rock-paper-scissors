import { ADD_ROUND, AddRoundAction } from '../actions';
import { State } from '../appState';

export const roundsReducer = (state: number, action: AddRoundAction): number => {
    switch (action.type) {
        case ADD_ROUND:
            return state + 1;
        default:
            return state;
    }
};

export const getRounds = (state: State): number => state.rounds;
