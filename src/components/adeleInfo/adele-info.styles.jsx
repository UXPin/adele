import styled from 'styled-components';
import { adeleInfo } from '../../style_tokens/tokens';

const StyledSection = styled.section`
  width: 600px;
  margin: 0 auto;
`;

const StyledHeader = styled.h2`
  font-family: ${adeleInfo.typography.fontFamily};
  font-size: ${adeleInfo.typography.sizeHeader};
  color: ${adeleInfo.typography.colorHeader};
  font-weight: ${adeleInfo.typography.weightText};
  text-align: center;
  margin: 0;
`;

const StyledText = styled.span`
  display: block;
  font-family: ${adeleInfo.typography.fontFamily};
  font-size: ${adeleInfo.typography.sizeText};
  color: ${adeleInfo.typography.colorText};
  font-weight: ${adeleInfo.typography.weightText};
  line-height: calc(${adeleInfo.typography.sizeText} * 2);
  margin: 40px auto 0 auto;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export { StyledSection, StyledHeader, StyledText, StyledFooter };
