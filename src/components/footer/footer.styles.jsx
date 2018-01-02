import styled from 'styled-components';
import { footer } from '../../style_tokens/tokens';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 210px;
  margin-top: 140px;
  border-top: 1px solid #f8f8f8;
  padding: 10px 0 10px 0;

  font-family: ${footer.fontFamily};
  font-size: ${footer.size};
  font-weight: ${footer.weight};
  color: ${footer.color};
`;

const StyledTextSection = styled.ul`
  display: inline-block;

  li {
    display: inline-block;
    margin-right: 5px;
  }
`;

export { StyledFooter, StyledTextSection };
