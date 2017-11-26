import React from 'react';
import 'jest-styled-components';

import Input from '../input';

const mockFunc = () => {
  return true
}

it('renders uncontrolled input correctly', () => {
  const wrapper = mount(<Input
            name="search"
            type="search"
            color="light"
            placeholder="Type to filter..."
            autoComplete='off'
            action={() => mockFunc()}
            controlled={false} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders controlled input correctly', () => {
  const wrapper = mount(<Input
            name="search"
            type="search"
            color="dark"
            placeholder="Type to filter..."
            autoComplete='off'
            action={() => mockFunc()}
            value={'test string'}
            controlled={true} />);
  expect(wrapper).toMatchSnapshot();
});
