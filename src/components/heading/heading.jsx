/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import NavLink from '../navLink/nav-link';

import { StyledHeading, StyledLinksWrapper, ButtonsWrapper } from './heading.styles';

const Heading = ({ scroll }) => {
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
    <StyledHeading scroll={scroll}>
      <h1>Adele</h1>
      <span>The repository of publicly available design systems and pattern libraries</span>
      <StyledLinksWrapper>
        <a href="https://www.uxpin.com/sign-up" target="_blank" rel="noopener noreferrer">Start a free UXPin trial</a>
      </StyledLinksWrapper>
      <ButtonsWrapper>
        <NavLink action={() => scrollTo('adele-info')} label="Why Adele?" tab={1} />
        <a href="https://github.com/uxpin/adele" target="_blank" rel="noopener noreferrer">
          Adele on Github
        </a>
      </ButtonsWrapper>
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
