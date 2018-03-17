import { CHANGE_STATUS, ChangeStatusAction } from '../actions';
import { State } from '../appState';
import { ResultType } from '../../game-mechanics';

export const statusReducer = (state: ResultType, action: ChangeStatusAction): ResultType => {
    switch (action.type) {
        case CHANGE_STATUS:
            return action.payload;
        default:
            return state;
    }
};

export const selectStatus = (state: State): ResultType => state.status; 