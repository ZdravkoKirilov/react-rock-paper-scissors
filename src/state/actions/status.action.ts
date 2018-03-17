import { ResultType } from '../../game-mechanics';

export const CHANGE_STATUS = 'CHANGE_STATUS';

export interface ChangeStatusAction {
    type: typeof CHANGE_STATUS;
    payload: ResultType;
}

export const changeStatus = (payload: ResultType): ChangeStatusAction => ({ type: CHANGE_STATUS, payload });