import * as React from 'react';
import RoundStatus, { Props } from './index';
import { shallow, ShallowWrapper } from 'enzyme';

let wrapper: ShallowWrapper<Props, {}>;
const status = 'Win';

beforeEach(() => {
    wrapper = shallow(<RoundStatus status={status} />);
});

it('renders correct status', () => {
    expect(wrapper.find('h1').text()).toEqual(status);
});