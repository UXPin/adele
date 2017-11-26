import styled from 'styled-components';
import { sectionHeader } from '../../style_tokens/tokens';

const StyledSectionHeader = styled.h3`
  font-family: ${sectionHeader.typography.fontFamily};
  font-size: ${sectionHeader.typography.size};
  font-weight: ${sectionHeader.typography.weight};
  color: ${sectionHeader.typography.color};
  font-variant: small-caps;
  margin: 80px 0 40px 0;
`;

export { StyledSectionHeader as default };
