import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import { WeaponType, ResultType } from '../game-mechanics';
import { Player } from '../state';
import WeaponPicker from './Weapons';
import RoundStatus from './RoundStatus';
import Score from './Scoreboard';
import HeaderMenu from './HeaderMenu';

import './style.css';

interface Props {
    status: ResultType;
    player: Player;
    opponent: Player;
    rounds: number;
    onWeaponPick: (weapon: WeaponType) => void;
    onGameReset: () => void;
}

const GameView: React.SFC<Props> = ({ onWeaponPick, onGameReset, status, player, opponent, rounds }) => {
    return (
        <MuiThemeProvider>
            <main className="main-view">
                <HeaderMenu onGameReset={onGameReset} />

                <WeaponPicker onWeaponPick={onWeaponPick} />

                <Divider />

                <div className="mid-section">
                    <RoundStatus status={status} />
                    <Score player={player} opponent={opponent} rounds={rounds} />
                </div>
            </main>
        </MuiThemeProvider>
    );
};

export default GameView;