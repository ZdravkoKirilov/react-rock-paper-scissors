import * as React from 'react';

import { ResultType } from '../../game-mechanics';
import './style.css';

interface Props {
    status: ResultType;
}

const RoundStatus: React.SFC<Props> = ({ status }) => {
    return (
        <div className="result">
            <h1 className="background-sheet">{status}</h1>
        </div>
    );
};

RoundStatus.defaultProps = {
    status: ''
};

export default RoundStatus;