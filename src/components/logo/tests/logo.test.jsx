import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../logo';

it('renders Logo correctly', () => {
  const wrapper = mount(<BrowserRouter><Logo /></BrowserRouter>);
  expect(wrapper).toMatchSnapshot();
});
