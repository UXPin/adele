import React from 'react';
import 'jest-styled-components';

import HeaderContainer from '../header-container';

it('renders HeaderContainer correctly', () => {
  const wrapper = mount(<HeaderContainer scroll={true} />);
  expect(wrapper).toMatchSnapshot();
});
