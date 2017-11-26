import React from 'react';
import 'jest-styled-components';

import SectionHeader from '../section-header';

it('renders SectionHeader correctly', () => {
  const wrapper = mount(<SectionHeader content="why adele?" />);
  expect(wrapper).toMatchSnapshot();
});
