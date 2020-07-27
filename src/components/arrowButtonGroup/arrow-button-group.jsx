import React from 'react';
import PropTypes from 'prop-types';
import ArrowButton from '../arrowButton/arrow-button';
import StyledArrowButtonGroup from './arrow-button-group.styles';

const ArrowButtonGroup = ({ action, scrollerInactive }) => (
  <StyledArrowButtonGroup>
    <ArrowButton
      direction="left"
      action={() => action('left')}
      scrollerInactive={scrollerInactive}
    />
    <ArrowButton
      direction="right"
      action={() => action('right')}
      scrollerInactive={scrollerInactive}
    />
  </StyledArrowButtonGroup>
);

ArrowButtonGroup.propTypes = {
  action: PropTypes.func.isRequired,
  scrollerInactive: PropTypes.oneOf(['right', 'left', '']).isRequired,
};

export { ArrowButtonGroup as default };
