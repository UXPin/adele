import React from 'react';
import 'jest-styled-components';

import TableControls from '../table-controls';

const mockFunc = () => true;

it('renders table controls correctly', () => {
  const wrapper = mount(<TableControls
    moveTable={mockFunc}
    filterSearch={mockFunc}
    updateData={mockFunc}
    scrollerInactive="left"
  />);
  expect(wrapper).toMatchSnapshot();
});
