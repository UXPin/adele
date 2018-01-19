import React from 'react';
import PropTypes from 'prop-types';
import { StyledSocialList, StyledSocialItem, StyledListElement } from './social.styles';

import Icon from '../icon/icon';
import twitter from '../../icons/twitter.svg';
import facebook from '../../icons/facebook.svg';
import linkedin from '../../icons/linkedin.svg';
import github from '../../icons/github.svg';

const Social = (props) => {
  /* SVG Icons */
  const twitterSVG = twitter;
  const facebookSVG = facebook;
  const linkedinSVG = linkedin;
  const githubSVG = github;

  /* Social Messages */
  const title = 'Adele - The Open Source Repository of Design Systems!';
  const message =
    'Check out Adele - the free repository of publicly available design systems and pattern libraries!';

  /* Social Links */
  const githubLink = 'https://github.com/marcintreder/adele';
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${props.url}`;
  const twitterLink = `https://twitter.com/home?status=${message} ${props.url}`;
  const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url}&title=${
    title
  }&summary=${message}&source=`;

  /* Functions openning social links as popups */
  const openPopUp = (link, h, w) => {
    /* Calculations for vertical position */
    const halfOuterHeight = window.outerHeight / 2;
    const halfScreenHeight = (window.screenY - h) / 2;
    const y = halfOuterHeight + halfScreenHeight;

    /* Calculations for horizontal position */
    const halfOuterWidth = window.outerWidth / 2;
    const halfScreenWidth = (window.screenX - w) / 2;
    const x = halfOuterWidth + halfScreenWidth;

    return window.open(link, '', `width=${w}, height=${h}, top=${y}, left=${x}`);
  };

  /* Two functions returning the right data for every network.
  ** Originally used eval() has been replaced by separate functions.
  */
  function getIcon(network) {
    if (network === 'facebook') {
      return facebookSVG;
    } else if (network === 'twitter') {
      return twitterSVG;
    } else if (network === 'linkedin') {
      return linkedinSVG;
    }
    return false;
  }

  function getLink(network) {
    if (network === 'facebook') {
      return facebookLink;
    } else if (network === 'twitter') {
      return twitterLink;
    } else if (network === 'linkedin') {
      return linkedinLink;
    }
    return false;
  }

  return (
    <StyledSocialList>
      <StyledListElement title="github">
        <StyledSocialItem tabIndex={props.tab}>
          <a href={githubLink} target="_blank">
            <Icon i={githubSVG} size="m" color="#006cff" active />
          </a>
        </StyledSocialItem>
      </StyledListElement>
      {props.networks.map(item => (
        <StyledListElement key={item} title={`${item} social share`}>
          <StyledSocialItem onClick={() => openPopUp(getLink(item), 600, 400)} tabIndex={props.tab}>
            <Icon i={getIcon(item)} size="s" color="#006cff" active />
          </StyledSocialItem>
        </StyledListElement>
      ))}
    </StyledSocialList>
  );
};

Social.propTypes = {
  networks: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  tab: PropTypes.number,
};

Social.defaultProps = {
  tab: 0,
};

export { Social as default };
