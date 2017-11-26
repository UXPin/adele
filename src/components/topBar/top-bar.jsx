import React from 'react';
import PropTypes from 'prop-types';
import { StyledTopBar, StyledBrand } from './top-bar.styles';

import Logo from '../logo/logo';
import Social from '../social/social';

const TopBar = props => (
  <StyledTopBar scroll={props.scroll} id="top-bar">
    <StyledBrand scroll={props.scroll}>
      <Logo tab={1} />
      <figcaption>
        <a
          tabIndex={1}
          href="http://uxpin.com"
          target="_blank"
          rel="noopener noreferrer"
          title="UXPin - The Design Systems Platform"
        >
          The Design Systems Platform
        </a>
      </figcaption>
    </StyledBrand>
    <Social
      networks={['twitter', 'facebook', 'linkedin']}
      url="https://www.uxpin.com/adele"
      tab={1}
    />
  </StyledTopBar>
);

TopBar.propTypes = {
  scroll: PropTypes.bool,
};

TopBar.defaultProps = {
  scroll: false,
};

export { TopBar as default };
