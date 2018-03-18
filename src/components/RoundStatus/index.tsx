import * as React from 'react';

import { ResultType } from '../../game-mechanics';
import './style.css';

export interface Props {
    status: ResultType;
}

const RoundStatus: React.SFC<Props> = ({ status }) => {
    return (
        <div className="result">
            <h1 className="background-sheet">{status}</h1>
        </div>
    );
};

export default RoundStatus;