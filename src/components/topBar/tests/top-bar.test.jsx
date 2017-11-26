import React from 'react';
import 'jest-styled-components';

import TopBar from '../top-bar';

it('renders TopBar with scroll inactive correctly', () => {
  const wrapper = mount(<TopBar scroll={false} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders TopBar with scroll active correctly', () => {
  const wrapper = mount(<TopBar scroll />);
  expect(wrapper).toMatchSnapshot();
});
