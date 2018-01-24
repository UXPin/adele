import React from 'react';
import { StyledSection, StyledHeader, StyledText, StyledFooter } from './adele-info.styles';
import NavLink from '../navLink/nav-link';

const AdeleInfo = () => (
  <StyledSection>
    <StyledHeader>Adele Goldberg. The Icon.</StyledHeader>
    <StyledText>
      <p>
        No. Adele – the Design Systems Repository, is not named after Adele – the singer. This is
        a tribute to one of the most important computer scientists focused on graphic user
        interfaces, design patterns and object-oriented programming –{' '}
        <a
          href="https://en.wikipedia.org/wiki/Adele_Goldberg_(computer_scientist)"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={5}
        >
          Adele Goldberg
        </a>.
      </p>

      <p>
        Adele Goldberg worked at XEROX PARC in the 70s and managed the System Concepts Laboratory
        where, together with Alan Kay and others, she developed Smalltalk-80 – an object-oriented,
        dynamically typed programming language that was meant to power the &quot;human-computer
        symbiosis&quot;.
      </p>
      <p>
        Needless to say, SmallTalk also pioneered many concepts important to all modern design
        systems. Objects in Smalltalk were easily transferable between applications and
        customizable. Smalltalk also served as the foundation of PARC&apos;s work on graphically
        based user interfaces (many GUI concepts have been developed by Adele Goldberg and her
        group!).
      </p>
      <StyledFooter>
        <p>Thank you Adele!</p>
        <NavLink
          label="Back to the top"
          tab={5}
          action={() => {
            window.scrollTo({ behavior: 'smooth', left: '0', top: '0' });
          }}
        />
      </StyledFooter>
    </StyledText>
  </StyledSection>
);

export { AdeleInfo as default };
