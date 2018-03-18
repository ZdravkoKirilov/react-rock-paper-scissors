import * as React from 'react';

import { WeaponType, weapons } from '../../game-mechanics';
import Weapon from './Weapon';
import './style.css';

const rock = require('../../assets/rock.svg');
const paper = require('../../assets/paper.svg');
const scissors = require('../../assets/scissors.svg');

export interface Props {
    onWeaponPick: (weapon: WeaponType) => void;
}

const WeaponPicker: React.SFC<Props> = ({ onWeaponPick }) => {
    return (
        <div className="weapon-picker">
            <Weapon onWeaponPick={onWeaponPick} image={rock} type={weapons.ROCK} />
            <Weapon onWeaponPick={onWeaponPick} image={paper} type={weapons.PAPER} />
            <Weapon onWeaponPick={onWeaponPick} image={scissors} type={weapons.SCISSORS} />
        </div>
    );
};

export default WeaponPicker;
