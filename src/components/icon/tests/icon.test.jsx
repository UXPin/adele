import React from 'react';
import 'jest-styled-components';

import Icon from '../icon';
import twitter from '../../icons/twitter.svg';
import logo from '../../icons/uxpin_logo.svg';

it('renders small twitter icon', () => {
  const wrapper = mount(<Icon i={twitter} size={'s'} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders large uxpin icon', () => {
  const wrapper = mount(<Icon i={logo} size={'l'} color={'#000'} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders small uxpin icon rotated', () => {
  const wrapper = mount(<Icon i={logo} size={'s'} rotate={45} />);
  expect(wrapper).toMatchSnapshot();
});
