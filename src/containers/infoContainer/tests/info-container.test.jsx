import React from 'react';
import 'jest-styled-components';

import InfoContainer from '../info-container';
import AdeleInfo from '../../../components/adeleInfo/adele-info';

it('renders InfoContainer correctly', () => {
  const wrapper = mount(<InfoContainer>
    <AdeleInfo />
                        </InfoContainer>);
  expect(wrapper).toMatchSnapshot();
});
