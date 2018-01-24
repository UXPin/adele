import styled from 'styled-components';
import { heading } from '../../style_tokens/tokens';

const StyledHeading = styled.div`
  font-family: ${heading.fontFamily};

  margin: 150px auto 90px auto;

  h1 {
    /* display: ${props => (props.scroll === true ? 'none' : 'block')};*/
    display: block;
    position: relative;

    margin: 0;

    font-size: ${heading.sizeHeader};
    color: ${heading.colorHeader};
    text-align: center;
    letter-spacing: -13px;
    text-shadow: ${heading.shadow};
  }

  span {
    display: block;
    position: relative;
    width: 500px;

    margin: -10px auto 0 auto;

    font-size: 26px;
    font-weight: ${heading.weight};
    line-height: 1.3;
    color: ${heading.colorSubheader};
    text-align: center;
    text-shadow: none;
  }
`;

const StyledLinksWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 40px;

  > button:first-child {
    margin-right: 40px;
  }
`;

export { StyledHeading, StyledLinksWrapper };
