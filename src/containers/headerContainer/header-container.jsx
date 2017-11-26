import React from 'react';
import PropTypes from 'prop-types';
import StyledHeaderContainer from './header-container.styles';

import TopBar from '../../components/topBar/top-bar';
import Heading from '../../components/heading/heading';

const HeaderContainer = props => (
  <StyledHeaderContainer id="header">
    <TopBar scroll={props.scroll} />
    <Heading scroll={props.scroll} />
  </StyledHeaderContainer>
);

HeaderContainer.propTypes = {
  scroll: PropTypes.bool.isRequired,
};

export { HeaderContainer as default };
