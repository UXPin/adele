import React from 'react';
import 'jest-styled-components';

import Social from '../social';

it('renders three Social buttons correctly', () => {
  const wrapper = mount(<Social networks={['facebook', 'twitter', 'linkedin']} url={'http://#'}/>);
  expect(wrapper).toMatchSnapshot();
});

it('renders three Social buttons correctly', () => {
  const wrapper = mount(<Social networks={['facebook', 'twitter']} url={'http://#'}/>);
  expect(wrapper).toMatchSnapshot();
});
