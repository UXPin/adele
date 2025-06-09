import styled from 'styled-components';

const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99999;
  top: 0;
  margin-top: 0;
  width: 100%;
  height: 60px;
  font-family: 'proxima-nova', 'sans-serif';
  font-size: 14px;
  color: #666;
  background-color: #fff;

  @media (max-width: 1100px) {
    display: block;
    height: auto;
    overflow: scroll;
    max-height: 90vh;
  }
`;

const StyledBrand = styled.figure`
  display: flex;
  align-items: center;
  margin-left: ${({ scroll }) => (scroll === true ? '100px' : '4px')};

  @media (max-width: 1200px) {
    margin: 15px;
  }
`;

const StyledMenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 0px;

  img {
    height: 24px;
    width: 24px;
  }

  @media (min-width: 1101px) {
    display: none;
  }
`;

const StyledMenu = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const StyledMenuLink = styled.a`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;

  &:hover {
    color: #666;
  }
  
  > img {
    margin-top: 2px;
    height: 24px;
    width: 24px;
  }
  
  > span {
    background: #ccccff;
    font-size: 12px;
    font-weight: bold;
    border-radius: 2px;
    padding: 3px;
    line-height: 12px;
    margin-right: 3px;
    text-align: center;
  }
`;

const StyledActions = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    display: block;
  }
`;

const StyledActionItem = styled.div`
  padding: 17px 10px;
  margin: auto;
  cursor: pointer;
`;

const StyledActionButtonDemo = styled.a`
  width: 116px;
  padding: 10px;
  border: 2px solid #121212;
  border-radius: 4px;
  background-color: #f3f3f3;
  font-size: 14px;
  color: #121212;
  line-height: 16px;
  text-decoration: none;
  text-align: center;
`;

const StyledActionButtonTrial = styled.a`
  width: 116px;
  padding: 10px;
  border: 2px solid #121212;
  border-radius: 4px;
  background-color: #fcc820;
  font-size: 14px;
  color: #121212;
  line-height: 16px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const StyledMenuDropdown = styled.div`
  position: absolute;
  background-color: #fff;
  top: 60px;
  left: 0;
  right: 0;
  padding: 25px 0;
  border-top: 1px solid #c5c5c5;
  border-bottom: 2px solid #121212;
  display: none;
  z-index: 1000;

  ${({ isActive }) => isActive && `
      display: block;
  `};

  @media (max-width: 1100px) {
    top: auto;
    position: relative;
    border: none;
    padding: 0px;
  }
`;

const StyledMenuItem = styled.div`
  padding: 17px 36px 17px 0px;
  margin: auto;
  cursor: pointer;

  &:hover ${StyledMenuDropdown} {
    display: block;
  }

  @media (max-width: 1300px) {
    padding: 17px 15px 17px 0px;
  }

  @media (max-width: 1100px) {
    padding: 17px 25px 17px 17px;
  }
`;

const StyledMenuDropdownCol = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    margin-top: 10px;
  }
`;

const StyledMenuDropdownRight = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }
`;

const StyledMenuDropdownContainer = styled.div`
  display: flex;
  justify-content: left;
  gap: 50px;
  margin: auto;
  max-width: 990px;

  @media (max-width: 1100px) {
    display: block;
    margin: 0px 10px;
  }
`;

const StyledMenuDropdownContainerLast = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  justify-content: space-between;
  margin: auto;
  max-width: 990px;

  @media (max-width: 1100px) {
    display: block;
  }
`;

const StyledMenuDropdownColTitle = styled.a`
  color: #121212;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  line-height: 32px;
  height: 32px;
  margin-bottom: 4px;
  align-items: center;
  display: flex;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledMenuDropdownColTitleArrow = styled.img`
  transform: rotate(-90deg);
  margin-bottom: 2px;
`;

const StyledMenuDropdownColTitleIcon = styled.img`
  margin-right: 5px;
`;

const StyledMenuDropdownColLink = styled.a`
  font-size: 14px;
  color: #121212;
  text-decoration: none;
  line-height: 32px;

  > span {
    background: #ccccff;
    font-size: 12px;
    border-radius: 2px;
    padding: 2px 4px;
    line-height: 12px;
    margin-left: 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  &:hover {
    text-decoration: underline;

    > span {
      text-decoration: none;
    }
  }
`;

const StyledMenuDropdownDownloadContainer = styled.div`
  display: flex;
  border-left: 2px solid #000;
  padding-left: 72px;
`;

const StyledMenuDropdownDownload = styled.div`

`;

const StyledMenuDropdownColText = styled.p`
  max-width: 340px;
  margin: 0;
  font-size: 12px;
  color: #666;
  line-height: 19px;
`;

const StyledMenuDropdownColImg = styled.img`
  max-width: 125px;
  border-radius: 4px;
  margin-right: 40px;
`;

const StyledMenuDropdownLeft = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export {
  StyledTopBar,
  StyledBrand,
  StyledMenuToggle,
  StyledMenu,
  StyledMenuItem,
  StyledMenuLink,
  StyledActions,
  StyledActionItem,
  StyledActionButtonDemo,
  StyledActionButtonTrial,
  StyledMenuDropdown,
  StyledMenuDropdownContainer,
  StyledMenuDropdownContainerLast,
  StyledMenuDropdownCol,
  StyledMenuDropdownColTitle,
  StyledMenuDropdownColTitleIcon,
  StyledMenuDropdownColTitleArrow,
  StyledMenuDropdownColLink,
  StyledMenuDropdownColText,
  StyledMenuDropdownColImg,
  StyledMenuDropdownDownloadContainer,
  StyledMenuDropdownDownload,
  StyledMenuDropdownLeft,
  StyledMenuDropdownRight,
};
