import { UPDATE_PLAYER_SCORE, UPDATE_PLAYER_LAST_PICK, PlayerAction } from '../actions';
import { Player, State } from '../appState';

export const playerReducer = (state: Player, action: PlayerAction): Player => {
    switch (action.type) {
        case UPDATE_PLAYER_SCORE:
            return {
                ...state,
                score: state.score + 1
            };
        case UPDATE_PLAYER_LAST_PICK:
            return {
                ...state,
                lastPick: action.payload
            };
        default:
            return state;
    }
};

export const getPlayer = (state: State): Player => state.player; 