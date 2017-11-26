import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import { StyledSection, StyledHeader, StyledText, StyledImage } from './uxpin-promo.styles';

const UXPinPromo = props => (
  <StyledSection>
    <StyledHeader>{props.header}</StyledHeader>
    <StyledImage src={props.image} alt={props.alt} />
    <StyledText>{props.text}</StyledText>
    <Button label={props.buttonLabel} action={props.link} type="link" tab={5} targetBlank />
  </StyledSection>
);

UXPinPromo.propTypes = {
  image: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export { UXPinPromo as default };
