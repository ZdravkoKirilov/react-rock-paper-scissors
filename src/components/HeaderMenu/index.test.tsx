import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount, ReactWrapper } from 'enzyme';

import Header, { Props } from './';

let wrapper: ReactWrapper<Props, {}>;
const onGameReset = jest.fn();
const title = 'Rock - Paper - Scissors';

beforeEach(() => {
    wrapper = mount(<MuiThemeProvider><Header onGameReset={onGameReset} title={title}/></MuiThemeProvider>);
});

it('fires callback when reset is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(onGameReset.mock.calls.length).toEqual(1);
    wrapper.find('button').simulate('click');
    expect(onGameReset.mock.calls.length).toEqual(2);
});
