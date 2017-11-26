import styled from 'styled-components';
import { inputs } from '../../style_tokens/tokens';

const StyledInput = styled.input.attrs({
  autoComplete: props => props.autoComplete,
})`
  appearance: none;
  outline: none;
  width: 100%;
  max-width: 130px;
  max-height: 27px;
  height: 28px;
  padding: 0 calc(${inputs.space.padding} / 2) 0 calc(${inputs.space.padding} * 1.4);

  background: none;
  border: 1px solid
    ${props => (props.color === 'light' ? inputs.border.color : inputs.border.colorDark)};
  border-radius: ${inputs.border.radius};
  font-family: ${inputs.typography.fontFamily};
  font-weight: ${inputs.typography.weight};
  color: ${props => (props.color === 'light' ? inputs.typography.color : 'white')};
  font-size: ${inputs.typography.size};
  line-height: 27px;

  &::placeholder {
    font-style: italic;
  }

  &:focus {
    border: 1px solid ${inputs.colors.outline};
  }
`;

export { StyledInput as default };
