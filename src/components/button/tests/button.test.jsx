import React from 'react';
import 'jest-styled-components';

import Button from '../button';

const mockFunc = () => true;

it('renders filled Button with button markup correctly', () => {
  const wrapper = mount(<Button type="button" label="Start Exploring Systems" action={() => mockFunc} tab={1} />);
  expect(wrapper).toMatchSnapshot();
});
