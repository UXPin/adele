import React from 'react';
import 'jest-styled-components';

import ArrowButton from '../arrow-button';

const mockFunc = () => true;

it('renders arrowButton left correctly', () => {
  const wrapper = mount(<ArrowButton action={() => mockFunc()} direction="left" scrollerInactive="left" />);
  expect(wrapper).toMatchSnapshot();
});

it('renders arrowButton right correctly', () => {
  const wrapper = mount(<ArrowButton action={() => mockFunc()} direction="right" scrollerInactive="right" />);
  expect(wrapper).toMatchSnapshot();
});
