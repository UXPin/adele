import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import SectionHeader from '../../components/sectionHeader/section-header';
import StyledHeaderContainer from '../headerContainer/header-container.styles';
import TopBar from '../../components/topBar/top-bar';
import { getRow } from '../../services/data';
import { SectionData } from './section-data';
import { DataRow } from './data-row';
import { Container } from './styled-container';

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

export default function DetailsPage() {
  const { id } = useParams();
  const data = getRow(id);
  const [isBreadcrumbsVisible, triggerBreadcrumbs] = useState(0);

  if (!data) {
    return (
      <Redirect to="/" />
    );
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

  const header = `what does ${data.company.data}'s design system include?`;
  const breadcrumbs = `/ ${data.company.data}'s ${data.system.data}`;

  return (
    <Container>
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
        <polygon id="cross" points="3.06 0.46 2.6 0 1.53 1.07 0.46 0 0 0.46 1.07 1.53 0 2.6 0.46 3.06 1.53 1.99 2.6 3.06 3.06 2.6 1.99 1.53 3.06 0.46" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.93 2.86" style={{ display: 'none' }}>
        <polygon id="tick" points="1.53 2.86 0 1.33 0.46 0.87 1.53 1.94 3.47 0 3.93 0.46 1.53 2.86" />
      </svg>
    </Container>
  );
}
