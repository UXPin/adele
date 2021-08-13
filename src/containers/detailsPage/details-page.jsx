import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import SectionHeader from '../../components/sectionHeader/section-header';
import StyledHeaderContainer from '../headerContainer/header-container.styles';
import TopBar from '../../components/topBar/top-bar';
import { getRow } from '../../services/data';
import { SectionData } from './section-data';
import { DataRow } from './data-row';
import { Container } from './styled-container';
import HelmetTags from '../../components/helmetTags/helmet-tags';

const DATA_TABLE = [
  {
    title: 'Technology',
    rows: [
      'codeDepth',
      'components',
      'js',
      'ts',
      'webComponents',
      'tests',
      'linter',
      'css',
      'cssInjs',
      'designTokens',
      'bundleManager',
      'distribution',
    ],
  },
  {
    title: 'Design',
    rows: [
      'uiKit',
      'brandGuidelines',
      'colorPalette',
      'colorNaming',
      'contrastAnalysis',
      'typography',
      'icons',
      'space/Grid',
      'illustrations',
      'dataVisualization',
      'animation',
      'voiceTone',
    ],
  },
  {
    title: 'Documentation & guidelines',
    rows: [
      'accessibilityGuidelines',
      'designPrinciples',
      'websiteDocumentation',
      'codeDocumentation',
      'storybook',
    ],
  },
];

function IconInfo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26px" className="d-inline mr-2" viewBox="0 0 26 26">
      <use href="#icon-info" fill="#B38600" />
    </svg>
  );
}

export default function DetailsPage() {
  const { id } = useParams();
  const data = getRow(id);
  if (!data) {
    return (
      <Redirect to="/" />
    );
  }

  const [isBreadcrumbsVisible, triggerBreadcrumbs] = useState(0);
  const header = `what does ${data.company.data}'s design system include?`;
  const breadcrumbs = `/ ${data.company.data}'s ${data.system.data}`;
  const canonicalUrl = `${data.company.data} - ${data.system.data}`;
  const canonicalUrlSpecialReplaced = canonicalUrl.replace(/([ .,;’]+)/g, '-').split('§sep§');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < canonicalUrlSpecialReplaced.length - 1; i++) {
    canonicalUrlSpecialReplaced[i] += '-';
  }

  useEffect(() => {
    const sections = document.querySelectorAll('#header');
    const config = {
      rootMargin: '-80px 0px 0px',
    };

    const observer = new IntersectionObserver(((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerBreadcrumbs(false);
        } else {
          triggerBreadcrumbs(true);
        }
      });
    }), config);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  });

  return (
    <Container>
      <HelmetTags
        title={`${data.company.data}'s Design System: ${data.system.data}`}
        description={`The design system of ${data.company.data}: ${data.system.data}`}
        urlNoSpecialCharacters={canonicalUrlSpecialReplaced}
      />
      <StyledHeaderContainer id="header">
        <TopBar scroll breadcrumbs={isBreadcrumbsVisible ? breadcrumbs : ''} />
      </StyledHeaderContainer>
      <div className="container">
        <section id="header">
          <p className="h3 mv-0">The</p>
          <h1 className="h1">{data.company.data}</h1>
          <p className="h3 mt-1 mb-0">design system is called</p>
          <h2 className="h1 mb-2">{data.system.data}</h2>
        </section>
        <ul className="list-unstyled">
          {data.websiteDocumentation.url
            ? (
              <li className="lh-2">
                website
                {' '}
                <a href={data.websiteDocumentation.url} target="_blank" rel="noopener noreferrer">
                  {data.websiteDocumentation.url}
                </a>
              </li>
            )
            : ''}
          {data.repository.url
            ? (
              <li className="lh-2">
                repository
                {' '}
                <a href={data.repository.url} target="_blank" rel="noopener noreferrer">
                  {data.repository.url}
                </a>
              </li>
            )
            : ''}
        </ul>
        {
          data.system.deprecated === 'yes'
            ? (
              <div className="infobox mt-3">
                {IconInfo()}
                <span className="tt-capitalize">
                  {data.system.data}
                </span>
                {' '}
                Design System has been deprecated.
              </div>
            )
            : ''
        }

        <SectionHeader content={header} id="uxpin-info" className="text-center" />
        {
          DATA_TABLE.map(({ title, rows }) => (
            <SectionData title={title} key={title}>
              {
                rows.map((row) => <DataRow row={data[row]} key={row} />)
              }
            </SectionData>
          ))
        }
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.06 3.06" style={{ display: 'none' }}>
        <polygon id="icon-cross" points="3.06 0.46 2.6 0 1.53 1.07 0.46 0 0 0.46 1.07 1.53 0 2.6 0.46 3.06 1.53 1.99 2.6 3.06 3.06 2.6 1.99 1.53 3.06 0.46" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.93 2.86" style={{ display: 'none' }}>
        <polygon id="icon-tick" points="1.53 2.86 0 1.33 0.46 0.87 1.53 1.94 3.47 0 3.93 0.46 1.53 2.86" />
      </svg>
      <svg width="26" height="26" viewBox="0 0 26 26" style={{ display: 'none' }} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon-info">
          <path d="M12 8C12 7.375 12.5 7 13 7C13.5 7 14 7.375 14 8C14 8.5 13.625 9 13 9C12.5 8.875 12 8.5 12 8ZM12 18.2175V10.887H14V18.2175H12Z" fill="#B38600" />
          <path d="M13 1C19.6 1 25 6.4 25 13C25 19.6 19.6 25 13 25C6.4 25 1 19.6 1 13C1 6.4 6.4 1 13 1ZM13 0C5.75714 0 0 5.75714 0 13C0 20.2429 5.75714 26 13 26C20.2429 26 26 20.2429 26 13C26 5.75714 20.2429 0 13 0Z" fill="#B38600" />
        </g>
      </svg>
    </Container>
  );
}
