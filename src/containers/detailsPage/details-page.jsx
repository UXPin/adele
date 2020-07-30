import React from 'react';
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

  if (!data) {
    return (
      <Redirect to="/" />
    );
  }

  const header = `what does ${data.company.data}'s design system include?`;

  return (
    <Container>
      <StyledHeaderContainer id="header">
        <TopBar />
      </StyledHeaderContainer>
      <div className="container">
        <p className="h3 mv-0">The</p>
        <h1 className="h1">{data.company.data}</h1>
        <p className="h3 mt-2 mb-0">design system is called</p>
        <h2 className="h1 mb-2">{data.system.data}</h2>
        <ul className="list-unstyled mt-2">
          {data.websiteDocumentation.url
            ? (
              <li>
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
              <li>
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
    </Container>
  );
}
