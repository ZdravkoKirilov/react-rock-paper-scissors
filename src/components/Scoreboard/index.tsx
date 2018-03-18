import * as React from 'react';

import { Player } from '../../state';
import Score from './Score';
import './style.css';

export interface Props {
    player: Player;
    opponent: Player;
    rounds: number;
}

const Scoreboard: React.SFC<Props> = ({ player, opponent, rounds }) => {
    const draws = rounds - (player.score + opponent.score);
    return (
        <div className="scoreboard background-sheet">
            <div>
                <span>You: </span>
                <Score score={player.score} lastPick={player.lastPick} />
            </div>
            <div>
                <span>Opponent: </span>
                <Score score={opponent.score} lastPick={opponent.lastPick} />
            </div>
            <p className="draws">Draws: <span>{draws}</span></p>
            <p className="rounds">Rounds: <span>{rounds}</span></p>
        </div>
    );
};

export default Scoreboard;