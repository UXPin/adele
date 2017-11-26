import React from 'react';
import 'jest-styled-components';

import Filters from '../filters';
import data from '../../../data/data.JSON';

const category = 'company';
const values = {codeDepth: "css", repository: "bitbucket"};
const dataArr = Array.from(data);

const mockFunc = () => true;

it('renders Filters correctly', () => {
  const wrapper = mount(<Filters
    filter={mockFunc}
    dataf={dataArr}
    values={values}
    category={category}
  />);
  expect(wrapper).toMatchSnapshot();
});
