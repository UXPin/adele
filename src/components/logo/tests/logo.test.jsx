import React from 'react';
import 'jest-styled-components';

import Logo from '../logo';

it('renders Logo correctly', () => {
  const wrapper = mount(<Logo />);
  expect(wrapper).toMatchSnapshot();
});
