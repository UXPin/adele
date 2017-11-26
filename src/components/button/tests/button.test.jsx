import React from 'react';
import 'jest-styled-components';

import Button from '../button';

const mockFunc = () => true;

it('renders filled Button correctly', () => {
  const wrapper = mount(<Button label="String" link="String" type="filled" targetBlank="_blank" />);
  expect(wrapper).toMatchSnapshot();
});

it('renders ghost Button correctly', () => {
  const wrapper = mount(<Button label="String" link="String" type="ghost" targetBlank="_blank" />);
  expect(wrapper).toMatchSnapshot();
});
