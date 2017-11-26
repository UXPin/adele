import React from 'react';
import PropTypes from 'prop-types';
import ArrowButton from '../arrowButton/arrow-button';
import StyledArrowButtonGroup from './arrow-button-group.styles';

const ArrowButtonGroup = props => (
  <StyledArrowButtonGroup>
    <ArrowButton
      direction="left"
      action={() => props.action('left')}
      scrollerInactive={props.scrollerInactive}
    />
    <ArrowButton
      direction="right"
      action={() => props.action('right')}
      scrollerInactive={props.scrollerInactive}
    />
  </StyledArrowButtonGroup>
);

ArrowButtonGroup.propTypes = {
  action: PropTypes.func.isRequired,
  scrollerInactive: PropTypes.oneOf(['right', 'left', '']).isRequired,
};

export { ArrowButtonGroup as default };
