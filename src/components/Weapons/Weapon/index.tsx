import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';

import { WeaponType } from '../../../game-mechanics';

export interface Props {
    image: string;
    type: WeaponType;
    onWeaponPick: (weapon: WeaponType) => void;
}

const Weapon: React.SFC<Props> = ({ onWeaponPick, image, type }) => {
    return (
        <div>
            <FlatButton
                className="weapon-btn"
                onClick={() => onWeaponPick(type)}
            >
                <img className="weapon-img" src={image} />
            </FlatButton>
        </div>

    );
};

export default Weapon;
