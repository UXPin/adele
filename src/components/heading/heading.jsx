/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import NavLink from '../navLink/nav-link';

import { StyledHeading, StyledLinksWrapper } from './heading.styles';

const Heading = (props) => {
  function scrollTo(destination) {
    const scrollDestination = () => {
      if (typeof destination === 'number') {
        return destination;
      }

      const target = document.getElementById(destination);
      const targetToTop = target.getBoundingClientRect().top;
      const topBarHeight = document.getElementById('top-bar').getBoundingClientRect().height;
      const scrollTarget = targetToTop - topBarHeight - 45;
      return scrollTarget;
    };

    window.scrollTo({ behavior: 'smooth', left: '0', top: `${scrollDestination()}` });
  }

  return (
    <StyledHeading scroll={props.scroll}>
      <h1>Adele</h1>
      <span>The repository of publicly available design systems and pattern libraries</span>
      <StyledLinksWrapper>
        <Button
          type="button"
          label="Start Exploring Systems"
          action={() => scrollTo(535)}
          tab={1}
        />
        <NavLink action={() => scrollTo('adele-info')} label="Why Adele?" tab={1} />
      </StyledLinksWrapper>
    </StyledHeading>
  );
};

Heading.propTypes = {
  scroll: PropTypes.bool,
};

Heading.defaultProps = {
  scroll: false,
};

export { Heading as default };
