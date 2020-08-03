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
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin: 0 auto;
    width: 72%;
    background: url(${background});
    background-repeat: space;
    background-position: center 80px;
    color: #323335;

    font-family: ${heading.fontFamily};
    text-align: left;

    margin: 150px auto 56px auto;

    .h1, .h2 {
      text-transform: capitalize;
      color: #000;
    }
    .h1 {
      position: relative;
      margin: 0;
      line-height: 1;
      font-size: ${heading.sizeHeader};
      text-align: left;
      letter-spacing: -13px;
      margin-inline-start: -7px;
      text-shadow: ${heading.shadow};
      word-break: break-word;
    }
    .h2 {
      font-size: 42px;
      font-weight: 300;
    }
    .h3 {
      line-height: 0.5;
      letter-spacing: 0;
      font-weight: 300;
      font-size: 26px;
    }

    .mv-0 {
      margin-top: 0;
      margin-bottom: 0;
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
      display: grid;
      grid-template-columns: 325px 1fr;
      column-gap: 2rem;
      width: 100%;
      margin-bottom: 80px;

      &:last-of-type {
        margin-bottom: 0;
      }

      .h2 {
        width: 325px;
        display: inline-block;
        color: #323335
      }
      &-table {
        width: 100%;
        font-weight: 300;

        td {
          border-bottom: 1px solid #ededed;
          padding: 0.75rem 0;
          text-transform: capitalize;

          &.no-border {
            border-color: transparent;
          }
        }
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
