import React from 'react';
import { StyledFooter, StyledTextSection } from './footer.styles';
import Logo from '../logo/logo';

const Footer = () => (
  <StyledFooter>
    <Logo tab={5} />
    <p>2010 - 2017 INC</p>
    <StyledTextSection>
      <a href="https://opensource.org/licenses/MIT" tabIndex={5}>
        MIT License
      </a>
      <p>Maintained by Marcin Treder.</p>
    </StyledTextSection>
  </StyledFooter>
);

export { Footer as default };
