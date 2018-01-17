import React from 'react';
import { StyledFooter, StyledTextSection } from './footer.styles';
import Logo from '../logo/logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <Logo tab={5} />
      <p>2010 - {currentYear} UXPin INC</p>
      <StyledTextSection>
        <li>Maintained by Marcin Treder.</li>
        <li>
          Inspired by{' '}
          <a href="https://github.com/alexpate/awesome-design-systems">Awesome Design Systems</a> by
          Alex Pate.
        </li>
      </StyledTextSection>
    </StyledFooter>
  );
};

export { Footer as default };
