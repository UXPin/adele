import React from 'react';
import 'jest-styled-components';

import Heading from '../heading';

it('renders Heading correctly when scroll is true', () => {
  const wrapper = mount(<Heading scroll={true} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders Heading correctly when scroll is false', () => {
  const wrapper = mount(<Heading scroll={false} />);
  expect(wrapper).toMatchSnapshot();
});
