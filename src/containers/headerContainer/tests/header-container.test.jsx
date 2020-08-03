import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';

import HeaderContainer from '../header-container';

it('renders HeaderContainer correctly', () => {
  const wrapper = mount(<BrowserRouter><HeaderContainer scroll /></BrowserRouter>);
  expect(wrapper).toMatchSnapshot();
});
