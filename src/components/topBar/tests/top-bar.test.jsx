import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';

import TopBar from '../top-bar';

it('renders TopBar with scroll inactive correctly', () => {
  const wrapper = mount(<BrowserRouter><TopBar scroll={false} /></BrowserRouter>);
  expect(wrapper).toMatchSnapshot();
});

it('renders TopBar with scroll active correctly', () => {
  const wrapper = mount(<BrowserRouter><TopBar scroll /></BrowserRouter>);
  expect(wrapper).toMatchSnapshot();
});
