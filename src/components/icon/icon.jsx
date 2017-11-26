import React from 'react';
import PropTypes from 'prop-types';
import StyledIcon from './icon.styles';

const Icon = props => (
  <StyledIcon
    svg={props.i}
    rotate={props.rotate}
    size={props.size}
    in={props.in}
    color={props.color}
    data-active={props.active}
  />
);

Icon.propTypes = {
  /*
  * i is used to pass SVG object as a string to SVGInline
  * SVG Inline is imported in the styled components
  * That assures easy and straightforward styling
  */
  i: PropTypes.string.isRequired,
  /*
  * Size is passed to styled component and triggers
  * the right size from imported design tokens
  */
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']).isRequired,
  /* Optional. Rotates icon by a given degree */
  rotate: PropTypes.number,
  /* Optional. Sets active style */
  active: PropTypes.bool,
  /* Optional. Sets hover color for icon s */
  in: PropTypes.oneOf(['red', 'blue', 'no']),
  /* Optional. Sets color of the icon */
  color: PropTypes.string,
};

Icon.defaultProps = {
  rotate: 0,
  active: false,
  in: 'blue',
  color: '#444',
};

export { Icon as default };
