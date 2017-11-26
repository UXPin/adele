import React from 'react';
import 'jest-styled-components';

import FilterTagSection from '../filter-tag-section';

const testString = 'test-string';
const mockFunc = () => true;

it('renders FilterTagSection with 3 filters correctly', () => {
  const wrapper = mount(<FilterTagSection
    numberOfFilters={3}
    getFilters={mockFunc}
    clearFilters={mockFunc}
  />);
  expect(wrapper).toMatchSnapshot();
});


it('renders FilterTagSection with 0 filters correctly', () => {
  const wrapper = mount(<FilterTagSection
    numberOfFilters={0}
    getFilters={mockFunc}
    clearFilters={mockFunc}
  />);
  expect(wrapper).toMatchSnapshot();
});

it('renders FilterTagSection with 1 filters correctly', () => {
  const wrapper = mount(<FilterTagSection
    numberOfFilters={1}
    getFilters={mockFunc}
    clearFilters={mockFunc}
  />);
  expect(wrapper).toMatchSnapshot();
});
