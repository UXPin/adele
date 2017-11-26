import React from 'react';
import 'jest-styled-components';

import FilterTag from '../filter-tag';

const testString = 'test-string';
const mockFunc = () => true;

it('renders FilterTag correctly', () => {
  const wrapper = mount(<FilterTag
    key={testString}
    label={testString}
    category={testString}
    formValue={testString}
    clear={mockFunc}
  />);
  expect(wrapper).toMatchSnapshot();
});
