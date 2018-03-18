import * as React from 'react';
import Score, { Props } from './';
import { shallow, ShallowWrapper } from 'enzyme';

let wrapper: ShallowWrapper<Props, {}>;
const score = 3;
const lastPick = 'Rock';

beforeEach(() => {
    wrapper = shallow(<Score score={score} lastPick={lastPick} />);
});

it('renders correct score', () => {
    expect(wrapper.find('.score-node span').text()).toEqual(score.toString());
});

it('renders correct last pick', () => {
    expect(wrapper.find('.last-pick-node span').text()).toEqual(lastPick);
});