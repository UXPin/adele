import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DownArrow from '../../assets/down-arrow.png';
import BlackArrow from '../../assets/black-arrow.png';
import DesignIcon from '../../assets/design-icon.png';
import DesignSystemsIcon from '../../assets/design-system-icon.png';
import CodeToDesignIcon from '../../assets/code-to-design-icon.png';
import IntegrationsIcon from '../../assets/integrations-icon.png';
import UseCasesIcon from '../../assets/usecases-icon.png';
import OverviewIcon from '../../assets/overview-icon.png';
import TestimonialsIcon from '../../assets/testimonials-icon.png';
import LearnIcon from '../../assets/learn-icon.png';
import ProductIcon from '../../assets/product-icon.png';
import DownloadIcon from '../../assets/download-icon.png';
import DownloadReport from '../../assets/download-report.png';
import BurgerIcon from '../../assets/burger.png';
import CloseIcon from '../../assets/burger-close.png';

import {
  StyledTopBar,
  StyledBrand,
  StyledMenuToggle,
  StyledMenu,
  StyledMenuItem,
  StyledMenuLink,
  StyledActions,
  StyledActionItem,
  StyledActionButtonDemo,
  StyledActionButtonTrial,
  StyledMenuDropdown,
  StyledMenuDropdownContainer,
  StyledMenuDropdownContainerLast,
  StyledMenuDropdownCol,
  StyledMenuDropdownColTitle,
  StyledMenuDropdownColTitleIcon,
  StyledMenuDropdownColTitleArrow,
  StyledMenuDropdownColLink,
  StyledMenuDropdownColText,
  StyledMenuDropdownColImg,
  StyledMenuDropdownDownloadContainer,
  StyledMenuDropdownDownload,
  StyledMenuDropdownLeft,
  StyledMenuDropdownRight,
} from './top-bar.styles';

import Logo from '../logo/logo';

const TopBar = ({ scroll }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const topBarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDropdownToggle = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (topBarRef.current && !topBarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledTopBar scroll={scroll} id="top-bar" ref={topBarRef}>
      <StyledBrand scroll={scroll}>
        <Logo tab={1} />
        <StyledMenuToggle onClick={toggleMenu}>
          <img
            src={menuOpen ? CloseIcon : BurgerIcon}
            alt={menuOpen ? 'Close menu' : 'Open menu'}
          />
        </StyledMenuToggle>
      </StyledBrand>
      <StyledMenu isOpen={menuOpen}>
        <StyledMenuItem>
          <StyledMenuLink
            onClick={(e) => {
              e.preventDefault();
              handleDropdownToggle('solutions');
            }}
          >
            Solutions
            <img src={DownArrow} alt="down arrow" />
          </StyledMenuLink>
          <StyledMenuDropdown isActive={activeDropdown === 'solutions'}>
            <StyledMenuDropdownContainer>
              <StyledMenuDropdownCol>
                <StyledMenuDropdownColTitle href="https://www.uxpin.com/design">
                  <StyledMenuDropdownColTitleIcon src={DesignIcon} alt="design icon" />
                  DESIGN
                  <StyledMenuDropdownColTitleArrow src={BlackArrow} alt="right arrow" />
                </StyledMenuDropdownColTitle>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/ui-design">UI Design</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/prototyping">Prototyping</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/handoff">Handoff</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/ux-design">UX Design</StyledMenuDropdownColLink>
              </StyledMenuDropdownCol>
              <StyledMenuDropdownCol>
                <StyledMenuDropdownColTitle href="https://www.uxpin.com/design-systems">
                  <StyledMenuDropdownColTitleIcon src={DesignSystemsIcon} alt="design systems icon" />
                  DESIGN SYSTEMS
                  <StyledMenuDropdownColTitleArrow src={BlackArrow} alt="right arrow" />
                </StyledMenuDropdownColTitle>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/design-system-management">Design System Management</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/design-tokens">
                  Design tokens
                  <span>SOON</span>
                </StyledMenuDropdownColLink>
              </StyledMenuDropdownCol>
              <StyledMenuDropdownCol>
                <StyledMenuDropdownColTitle href="https://www.uxpin.com/code-to-design">
                  <StyledMenuDropdownColTitleIcon src={CodeToDesignIcon} alt="code to design icon" />
                  CODE TO DESIGN
                  <StyledMenuDropdownColTitleArrow src={BlackArrow} alt="right arrow" />
                </StyledMenuDropdownColTitle>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/merge/developers">Merge AI 🔥</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/merge">Merge overview 🧩</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/advanced-prototyping">Advanced prototyping</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/merge/mui-library">MUI library</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/merge/fluent-ui-library">Fluent UI library</StyledMenuDropdownColLink>
              </StyledMenuDropdownCol>
              <StyledMenuDropdownCol>
                <StyledMenuDropdownColTitle href="https://www.uxpin.com/integrations">
                  <StyledMenuDropdownColTitleIcon src={IntegrationsIcon} alt="integrations icon" />
                  INTEGRATIONS
                  <StyledMenuDropdownColTitleArrow src={BlackArrow} alt="right arrow" />
                </StyledMenuDropdownColTitle>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/merge/git-integration">Git integration</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/merge/storybook-integration">Storybook integration</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/merge/npm-integration">npm integration</StyledMenuDropdownColLink>
              </StyledMenuDropdownCol>
              <StyledMenuDropdownCol>
                <StyledMenuDropdownColTitle href="">
                  <StyledMenuDropdownColTitleIcon src={UseCasesIcon} alt="use cases icon" />
                  USE CASES
                </StyledMenuDropdownColTitle>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/designers">For Designers</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/merge/developers">For Developers</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/design-ops">For DesignOps</StyledMenuDropdownColLink>
                <StyledMenuDropdownColLink href="https://www.uxpin.com/user-testing">For User Testing</StyledMenuDropdownColLink>
              </StyledMenuDropdownCol>
            </StyledMenuDropdownContainer>
          </StyledMenuDropdown>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="https://www.uxpin.com/merge">Merge 🔥</StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="https://www.uxpin.com/merge/developers">UI Builder 🧩</StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="https://www.uxpin.com/examples">Examples</StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink
            onClick={(e) => {
              e.preventDefault();
              handleDropdownToggle('enterprise');
            }}
          >
            Enterprise
            <img src={DownArrow} alt="down arrow" />
          </StyledMenuLink>
          <StyledMenuDropdown isActive={activeDropdown === 'enterprise'}>
            <StyledMenuDropdownContainer>
              <StyledMenuDropdownCol>
                <StyledMenuDropdownColTitle href="https://www.uxpin.com/enterprise">
                  <StyledMenuDropdownColTitleIcon src={OverviewIcon} alt="overview icon" />
                  OVERVIEW
                  <StyledMenuDropdownColTitleArrow src={BlackArrow} alt="right arrow" />
                </StyledMenuDropdownColTitle>
              </StyledMenuDropdownCol>
              <StyledMenuDropdownCol>
                <StyledMenuDropdownColTitle href="https://www.uxpin.com/testimonials">
                  <StyledMenuDropdownColTitleIcon src={TestimonialsIcon} alt="testimonials icon" />
                  TESTIMONIALS
                  <StyledMenuDropdownColTitleArrow src={BlackArrow} alt="right arrow" />
                </StyledMenuDropdownColTitle>
              </StyledMenuDropdownCol>
            </StyledMenuDropdownContainer>
          </StyledMenuDropdown>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="https://www.uxpin.com/pricing">Pricing</StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink
            onClick={(e) => {
              e.preventDefault();
              handleDropdownToggle('resources');
            }}
          >
            Resources
            <img src={DownArrow} alt="down arrow" />
          </StyledMenuLink>
          <StyledMenuDropdown isActive={activeDropdown === 'resources'}>
            <StyledMenuDropdownContainerLast>
              <StyledMenuDropdownLeft>
                <StyledMenuDropdownCol>
                  <StyledMenuDropdownColTitle href="https://www.uxpin.com/design">
                    <StyledMenuDropdownColTitleIcon src={ProductIcon} alt="product icon" />
                    PRODUCT
                  </StyledMenuDropdownColTitle>
                  <StyledMenuDropdownColLink href="https://www.uxpin.com/docs">Docs</StyledMenuDropdownColLink>
                  <StyledMenuDropdownColLink href="https://www.youtube.com/watch?v=IrAzCoU39SQ&list=PLTQ1nMZTXSUUOSMKm_icOjaVosG17wbe4">Video tutorials</StyledMenuDropdownColLink>
                  <StyledMenuDropdownColLink href="https://community.uxpin.com/">Community</StyledMenuDropdownColLink>
                </StyledMenuDropdownCol>
                <StyledMenuDropdownCol>
                  <StyledMenuDropdownColTitle href="https://www.uxpin.com/design-systems">
                    <StyledMenuDropdownColTitleIcon src={LearnIcon} alt="learn icon" />
                    LEARN
                  </StyledMenuDropdownColTitle>
                  <StyledMenuDropdownColLink href="https://www.uxpin.com/studio/blog/">Blog</StyledMenuDropdownColLink>
                  <StyledMenuDropdownColLink href="https://www.uxpin.com/studio/ebooks/">Ebooks</StyledMenuDropdownColLink>
                  <StyledMenuDropdownColLink href="https://www.uxpin.com/studio/webinars/">Webinars</StyledMenuDropdownColLink>
                </StyledMenuDropdownCol>
              </StyledMenuDropdownLeft>
              <StyledMenuDropdownRight>
                <StyledMenuDropdownCol>
                  <StyledMenuDropdownDownloadContainer>
                    <StyledMenuDropdownColImg src={DownloadReport} alt="download report" />
                    <StyledMenuDropdownDownload>
                      <StyledMenuDropdownColTitle href="https://www.uxpin.com/design-systems">
                        <StyledMenuDropdownColTitleIcon src={DownloadIcon} alt="download icon" />
                        DOWNLOAD OUR LATEST REPORT
                        <StyledMenuDropdownColTitleArrow src={BlackArrow} alt="right arrow" />
                      </StyledMenuDropdownColTitle>
                      <StyledMenuDropdownColText>
                        Download our free report on how leaders and design system contributors from
                        enterprise companies like Caterpillar, PayPal,
                        or Weir Group build and grow design systems.
                        Learn key lessons on design system maturity and operations.
                      </StyledMenuDropdownColText>
                    </StyledMenuDropdownDownload>
                  </StyledMenuDropdownDownloadContainer>
                </StyledMenuDropdownCol>
              </StyledMenuDropdownRight>
            </StyledMenuDropdownContainerLast>
          </StyledMenuDropdown>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="tel:+18888029327">1 (888) 802-9327</StyledMenuLink>
        </StyledMenuItem>
        <StyledActions>
          <StyledActionItem>
            <StyledMenuLink href="https://app.uxpin.com/">Log in</StyledMenuLink>
          </StyledActionItem>
          <StyledActionItem>
            <StyledActionButtonDemo href="https://calendly.com/uxpin-demo/merge-walkthrough/">Book a Demo</StyledActionButtonDemo>
          </StyledActionItem>
          <StyledActionItem>
            <StyledActionButtonTrial href="https://www.uxpin.com/sign-up">Try for free</StyledActionButtonTrial>
          </StyledActionItem>
        </StyledActions>
      </StyledMenu>
    </StyledTopBar>
  );
};

TopBar.propTypes = {
  scroll: PropTypes.bool,
};

TopBar.defaultProps = {
  scroll: false,
};

export { TopBar as default };
