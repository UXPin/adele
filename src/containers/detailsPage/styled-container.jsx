import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { heading } from '../../style_tokens/tokens';
import background from '../../assets/background.png';

export function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const StyledContainer = styled.div`
  .container {
    align-items: left;
    background: url(${background});
    background-repeat: space;
    background-position: center 80px;
    color: #323335;
    display: flex;
    flex-direction: column;
    font-family: ${heading.fontFamily};
    justify-content: center;
    margin: 150px auto 56px auto;
    width: 72%;
    text-align: left;

    .h1, .h2 {
      color: #000;
      text-transform: capitalize;
    }
    .h1 {
      font-size: ${heading.sizeHeader};
      letter-spacing: -13px;
      line-height: 1;
      margin: 0;
      margin-inline-start: -7px;
      position: relative;
      text-align: left;
      text-shadow: ${heading.shadow};
      word-break: break-word;
    }
    .h2 {
      font-size: 42px;
      font-weight: 300;
    }
    .h3 {
      letter-spacing: 0;
      line-height: 0.5;
      font-size: 26px;
      font-weight: 300;
    }
    .mv-0 {
      margin-bottom: 0;
      margin-top: 0;
    }
    .mt-0 {
      margin-top: 0;
    }
    .mt-1 {
      margin-top: 1rem;
    }
    .mt-2 {
      margin-top: 2rem;
    }
    .mb-0 {
      margin-bottom: 0;
    }
    .mb-1 {
      margin-bottom: 1rem;
    }
    .mb-2 {
      margin-bottom: 2rem;
    }
    .ml-1 {
      margin-left: 0.5rem;
    }
    .pl-1 {
      padding-left: 0.5rem;
    }
    .lh-2 {
      line-height: 2rem;
    }
    .list-unstyled {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .text-center {
      text-align: center;
    }
    .link-gray {
      color: inherit
    }
    .properties {
      column-gap: 2rem;
      display: grid;
      grid-template-columns: 325px 1fr;
      margin-bottom: 80px;
      width: 100%;

      &:last-of-type {
        margin-bottom: 0;
      }
      &-table {
        font-weight: 300;
        width: 100%;
        
        td {
          border-bottom: 1px solid #ededed;
          padding: 0.75rem 0;
          text-transform: capitalize;

          &.no-border {
            border-color: transparent;
          }
        }
      }
      .h2 {
        color: #323335
        display: inline-block;
        width: 325px;
      }
    }
    .table-icon {
      height: 9px;
      opacity: 0.87;

      & + span {
        border-left: 1px solid #ededed;
      }
    }
  }
`;
