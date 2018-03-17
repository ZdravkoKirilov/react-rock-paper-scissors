import * as React from 'react';

import { initialState, State } from '../state';
import { WeaponType, weapons, balance, resultTypes, playRound } from '../game-mechanics';

import GameView from '../components';

export default class GameContainer extends React.Component<{}, State> {
    state: State = {
        ...initialState,
        player: { ...initialState.player },
        opponent: { ...initialState.opponent }
    };

    handleWeaponPick = (weapon: WeaponType) => {
        const round = playRound(weapon, weapons, balance);
        const { result, opponentPick } = round;
        const isDraw = result === resultTypes.DRAW;
        const isWin = result === resultTypes.WIN;
        const isLoss = result === resultTypes.LOSS;

        this.setState(prevState => ({
            ...prevState,
            rounds: prevState.rounds + 1,
            player: {
                ...prevState.player,
                score: isWin && !isDraw ? ++prevState.player.score : prevState.player.score,
                lastPick: weapon
            },
            opponent: {
                ...prevState.opponent,
                score: isLoss && !isDraw ? ++prevState.opponent.score : prevState.opponent.score,
                lastPick: opponentPick
            },
            status: result
        }));
    }

    handleStateReset = () => {
        const newState = {
            ...initialState,
            player: { ...initialState.player },
            computer: { ...initialState.opponent }
        };
        this.setState(prevState => newState);
    }

    render() {
        const { handleWeaponPick, handleStateReset } = this;

        return (
            <GameView
                onWeaponPick={handleWeaponPick}
                onGameReset={handleStateReset}
                {...this.state}
            />
        );
    }
}