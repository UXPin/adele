/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import { uxpinPromo } from '../../style_tokens/tokens';

const StyledSection = styled.section`
  display: flex;
  flex: 2 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  &:first-child {
    margin-right: 80px;
  }
`;

const StyledImage = styled.img`
  margin: 40px 0 40px 0;
`;

const StyledTextSection = styled.section`
  display: block;
  position: relative;
`;

const StyledHeader = styled.h2`
  max-width: 600px;
  font-family: ${uxpinPromo.typography.fontFamily};
  font-size: ${uxpinPromo.typography.sizeHeader};
  color: ${uxpinPromo.typography.colorHeader};
  font-weight: ${uxpinPromo.typography.weight};
  line-height: calc(${uxpinPromo.typography.sizeHeader} * 1.3);
  margin-bottom: 20px;
`;

const StyledText = styled.p`
  max-width: 600px;
  font-family: ${uxpinPromo.typography.fontFamily};
  font-size: ${uxpinPromo.typography.sizeText};
  color: ${uxpinPromo.typography.colorText};
  font-weight: ${uxpinPromo.typography.weight};
  line-height: calc(${uxpinPromo.typography.sizeText} * 1.6);
  padding-bottom: 20px;
`;

export { StyledSection, StyledTextSection, StyledHeader, StyledText, StyledImage };
