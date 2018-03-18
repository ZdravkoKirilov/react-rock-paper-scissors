import * as React from 'react';
import Scoreboard, { Props } from './index';
import { shallow, ShallowWrapper } from 'enzyme';

let wrapper: ShallowWrapper<Props, {}>;
const rounds = 3;

const player = {
    score: 1
};

beforeEach(() => {
    wrapper = shallow(<Scoreboard rounds={rounds} player={player} opponent={player} />);
});

it('renders correct draws count', () => {
    expect(wrapper.find('.draws span').text()).toEqual((rounds - (player.score * 2)).toString());
});

it('renders correct rounds count', () => {
    expect(wrapper.find('.rounds span').text()).toEqual(rounds.toString());
});