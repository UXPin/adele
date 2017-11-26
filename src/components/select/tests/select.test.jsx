import React from 'react';
import 'jest-styled-components';

import Select from '../select';

const mockFunc = () => true;

const options = ['github', 'bitbucket'];

it('renders select correctly', () => {
  const wrapper = mount(<Select id="test-string" options={options} value="test string" action={() => mockFunc()} />);
  expect(wrapper).toMatchSnapshot();
});
