import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount, ReactWrapper } from 'enzyme';

import Weapon, { Props } from './';

let wrapper: ReactWrapper<Props, {}>;
const imgSrc = '../../../assets/rock.svg';
let onWeaponPick = jest.fn();
const rock = require(imgSrc);
const type = 'Rock';

beforeEach(() => {
    onWeaponPick = jest.fn();
    wrapper = mount((
        <MuiThemeProvider>
            <Weapon onWeaponPick={onWeaponPick} image={rock} type={type} />
        </MuiThemeProvider>
    ));
});

it('applies correct image', () => {
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('img').prop('src')).toEqual('rock.svg');
});

it('fires callback when weapon is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(onWeaponPick.mock.calls.length).toEqual(1);
    wrapper.find('button').simulate('click');
    expect(onWeaponPick.mock.calls.length).toEqual(2);
});

it('fires callback with correct arguments', () => {
    wrapper.find('button').simulate('click');
    expect(onWeaponPick).toHaveBeenCalledWith(type);
});
