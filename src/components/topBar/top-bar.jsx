import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledTopBar, StyledBrand } from './top-bar.styles';
import Logo from '../logo/logo';
import Social from '../social/social';

const TopBar = ({ scroll, breadcrumbs }) => (
  <StyledTopBar scroll={scroll} id="top-bar">
    <StyledBrand scroll={scroll}>
      <Logo tab={1} />
      { breadcrumbs
        ? (<figcaption className="d-block">{breadcrumbs}</figcaption>)
        : (
          <figcaption>
            <Link
              to="/"
              tabIndex={1}
              title="UXPin - The Design Systems Platform"
            >
              The Design Systems Platform
            </Link>
          </figcaption>
        )}

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
  breadcrumbs: PropTypes.string,
};

TopBar.defaultProps = {
  scroll: false,
  breadcrumbs: '',
};

export { TopBar as default };
