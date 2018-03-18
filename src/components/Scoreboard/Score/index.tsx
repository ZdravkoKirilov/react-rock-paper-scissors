import * as React from 'react';

import { WeaponType } from '../../../game-mechanics';

export interface Props {
    score: number;
    lastPick?: WeaponType;
}

const Score: React.SFC<Props> = ({ score, lastPick }) => {
    return (
        <ul className="score">
            <li className="score-node">Score: <span>{score}</span></li>
            <li className="last-pick-node">Last pick: <span>{lastPick}</span></li>
        </ul>
    );
};

export default Score;