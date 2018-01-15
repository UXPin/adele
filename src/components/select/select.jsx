import React from 'react';
import PropTypes from 'prop-types';

import StyledSelect from './select.styles';

const Select = props => (
  <StyledSelect onChange={props.action} id={props.id} value={props.value} tabIndex={props.tab}>
    <option value=""> All </option>
    {props.options.map(e => (
      <option value={e} key={e}>
        {e}
      </option>
    ))}
  </StyledSelect>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  tab: PropTypes.number,
};

Select.defaultProps = {
  tab: 0,
};

export { Select as default };
