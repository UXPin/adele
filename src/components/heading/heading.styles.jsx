import styled from 'styled-components';
import { heading } from '../../style_tokens/tokens';
import newTabIcon from '../../assets/new-tab-icon.png';

const StyledHeading = styled.div`
  font-family: ${heading.fontFamily};

  margin: 150px 10px 90px 10px;

  h1 {
    /* display: ${(props) => (props.scroll === true ? 'none' : 'block')};*/
    display: block;
    position: relative;

    margin: 0;

    font-size: ${heading.sizeHeader};
    color: ${heading.colorHeader};
    text-align: center;
    letter-spacing: -13px;
    text-shadow: ${heading.shadow};

    @media (max-width: 600px) {
      font-size: 100px;
      letter-spacing: -5px;
    }
  }

  span {
    display: block;
    position: relative;
    max-width: 500px;

    margin: -10px auto 0 auto;

    font-size: 26px;
    font-weight: ${heading.weight};
    line-height: 1.3;
    color: ${heading.colorSubheader};
    text-align: center;
    text-shadow: none;

    @media (max-width: 600px) {
      font-size: 22px;
      margin-top: 10px;
    }
  }
`;

const StyledLinksWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 40px;

  > button {
    width: 235px;
    max-width: none;
    height: 48px;
    font-weight: 600;
    border: 2px solid #121212;
    border-radius: 4px;
    background-color: #fcc820;
    font-size: 16px;
    color: #121212;
    line-height: 16px;
    text-align: center;
  }

  > button:hover {
    background-color: #f3f3f3;
    border: 2px solid #121212;
    box-shadow: none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 235px;
  margin: 24px auto 0px;

  > button, a {
    text-decoration: underline;
    color: #666666;
    font-size: 14px;
    line-height: 29px;
    font-weight: 300;
  }

  > a::after {
    content: "";
    display: inline-block;
    background-image: url(${newTabIcon});
    background-size: 17px 17px;
    background-position: 0px 5px;
    background-repeat: no-repeat;
    margin-left: 3px;
    width: 20px;
    height: 20px;
  }
`;

export { StyledHeading, StyledLinksWrapper, ButtonsWrapper };
