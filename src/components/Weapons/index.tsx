import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';

import { WeaponType, weapons } from '../../game-mechanics';
import './style.css';

const rock = require('../../assets/rock.svg');
const paper = require('../../assets/paper.svg');
const scissors = require('../../assets/scissors.svg');

interface Props {
    onWeaponPick: (weapon: WeaponType) => void;
}

const WeaponPicker: React.SFC<Props> = ({ onWeaponPick }) => {
    return (
        <div className="weapon-picker">
            <FlatButton
                className="weapon-btn"
                onClick={() => onWeaponPick(weapons.ROCK)}
            >
                <img className="weapon-img" src={rock} />
            </FlatButton>

            <FlatButton
                className="weapon-btn"
                onClick={() => onWeaponPick(weapons.PAPER)}
            >
                <img className="weapon-img" src={paper} />
            </FlatButton>

            <FlatButton
                className="weapon-btn"
                onClick={() => onWeaponPick(weapons.SCISSORS)}
            >
                <img className="weapon-img" src={scissors} />
            </FlatButton>
        </div>
    );
};

export default WeaponPicker;
