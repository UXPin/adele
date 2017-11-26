import React from 'react';
import 'jest-styled-components';

import AdeleInfo from '../adele-info';

it('renders AdeleInfo correctly', () => {
  const wrapper = mount(<AdeleInfo />);
  expect(wrapper).toMatchSnapshot();
});
