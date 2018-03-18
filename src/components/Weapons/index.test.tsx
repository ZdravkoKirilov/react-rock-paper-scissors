import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeaponPicker, { Props } from './index';
import { mount, ReactWrapper } from 'enzyme';

let wrapper: ReactWrapper<Props, {}>;

beforeEach(() => {
    wrapper = mount(<MuiThemeProvider><WeaponPicker onWeaponPick={jest.fn()} /></MuiThemeProvider>);
});

it('renders all 3 weapons', () => {
    expect(wrapper.find('button').length).toEqual(3);
});
