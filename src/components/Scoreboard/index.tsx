import * as React from 'react';

import { Player } from '../../state';
import Score from './Score';
import './style.css';

interface Props {
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
            <p>Draws: {draws}</p>
            <p>Rounds: {rounds}</p>
        </div>
    );
};

export default Scoreboard;