import styled from 'styled-components';
import { inputs } from '../../style_tokens/tokens';
import closeIcon from '../../assets/close.png';

const StyledInput = styled.input.attrs({
  autoComplete: props => props.autoComplete,
})`
  appearance: none;
  outline: none;
  -webkit-appearance: textfield;
  width: 90%;
  max-height: 28px;
  height: 28px;
  padding: 0 ${inputs.space.padding} 0 ${inputs.space.padding};

  background: none;
  border: 1px solid
    ${props => (props.color === 'light' ? inputs.border.color : inputs.border.colorDark)};
  border-radius: ${inputs.border.radius};
  font-family: ${inputs.typography.fontFamily};
  font-weight: ${inputs.typography.weight};
  color: ${props => (props.color === 'light' ? inputs.typography.color : 'white')};
  font-size: ${inputs.typography.size};
  line-height: 28px;

  &[type='search'] {
    border-color: ${inputs.border.colorLight};
  }

  &::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 11px;
    height: 11px;
    background: url(${closeIcon}) no-repeat center;
    background-size: contain;
  }

  &::placeholder {
    text-align: left;
    font-style: italic;
  }

  ::-webkit-input-placeholder {
    text-align: left;
    font-style: italic;
    width: 100%;
  }

  &:focus {
    border: 1px solid ${inputs.colors.outline};
  }
`;

export { StyledInput as default };
