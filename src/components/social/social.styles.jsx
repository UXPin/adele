import styled from 'styled-components';
import { social } from '../../style_tokens/tokens';

const StyledSocialList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 6px;

  /* Hack for Facebook's icon shape*/
  [title~='facebook'] {
    span {
      padding: 0 0 1px 2px;
    }
  }
  /* Hack for Twitter's icon shape*/
  [title~='twitter'] {
    span {
      padding: 0 0 0 2px;
    }
  }
  [title~='linkedin'] {
    span {
      padding: 0 0 0 2px;
    }
  }
  [title~='github'] {
    span {
      padding: 0 0 1px 2px;
      svg {
        width: 20px;
        margin-left: -7px;
      }
    }
  }
`;

const StyledListElement = styled.li`
  display: inline-block;
  margin-left: 6px;
`;

const StyledSocialItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: 1px solid #006cff;
  border-radius: 100%;
  transition: background-color ${social.easing};
  cursor: pointer;
  outline: none;

  span {
    position: relative;
    display: block;
    width: 14px;
    height: 14px;
  }

  svg {
    display: block;
    transition: fill ${social.easing};
    width: 10px;
    height: 14px;
  }

  &:hover,
  &:focus {
    background-color: ${social.colorActive};

    svg {
      fill: white;
    }
  }
`;

export { StyledSocialList, StyledSocialItem, StyledListElement };
