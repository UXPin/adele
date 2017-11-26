import React from 'react';
import 'jest-styled-components';

import Sorting from '../sorting';

const mockFunc = () => true;
const testString = 'test-string';

it('renders sorter AZ correctly', () => {
  const wrapper = mount(<Sorting sort={mockFunc} sorting="az" activeSorter={testString} category={testString} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders sorter ZA correctly', () => {
  const wrapper = mount(<Sorting sort={mockFunc} sorting="za" activeSorter={testString} category={testString} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders sorter default correctly', () => {
  const wrapper = mount(<Sorting sort={mockFunc} sorting="def" activeSorter={testString} category={testString} />);
  expect(wrapper).toMatchSnapshot();
});
