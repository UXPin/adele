import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import {
  StyledHeader,
  StyledImage,
  StyledSection,
  StyledText,
} from './uxpin-promo.styles';

const UXPinPromo = ({
  alt,
  buttonLabel,
  header,
  image,
  link,
  text,
}) => (
  <StyledSection>
    <StyledHeader>{header}</StyledHeader>
    <StyledImage src={image} alt={alt} />
    <StyledText>{text}</StyledText>
    <Button label={buttonLabel} action={link} type="link" tab={5} targetBlank />
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
