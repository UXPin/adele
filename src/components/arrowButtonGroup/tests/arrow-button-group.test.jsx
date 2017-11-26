import React from 'react';
import 'jest-styled-components';

import ArrowButtonGroup from '../arrow-button-group';

const mockFunc = () => true;

it('renders arrowButtonGroup correctly', () => {
  const wrapper = mount(<ArrowButtonGroup action={mockFunc} scrollerInactive="left" />);
  expect(wrapper).toMatchSnapshot();
});
