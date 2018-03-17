import * as React from 'react';

import { WeaponType } from '../../game-mechanics';

interface Props {
    score: number;
    lastPick?: WeaponType;
}

const Score: React.SFC<Props> = ({ score, lastPick }) => {
    return (
        <ul className="score">
            <li>Score: {score}</li>
            <li>Last pick: {lastPick}</li>
        </ul>
    );
};

export default Score;