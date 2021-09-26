import styled from 'styled-components';
interface StyledHeaderProps {
  openMenu: boolean;
}

export const DesktopNav = styled.div<StyledHeaderProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparent};
  /* background-color: ${({ openMenu, theme }) => openMenu ? theme.colors.balticSea : theme.colors.transparent}; */
  position:  ${({ openMenu }) => openMenu ? 'fixed': 'absolute'};
  animation:  ${({ openMenu }) => openMenu ? 'navbar-slice-down 1s': 'none'};
  transform:  ${({ openMenu }) => openMenu ? 'translate(-50%, 0)': 'none'};
  left:  ${({ openMenu }) => openMenu ? '50%': 'none'};
  height:  ${({ openMenu }) => openMenu ? '40px': '70px'};
  align-items: ${({ openMenu }) => openMenu ? 'center': 'none'};
  display: ${({ openMenu }) => openMenu ? 'flex': 'block'};
  justify-content: ${({ openMenu }) => openMenu ? 'space-between': 'none'};
  top: ${({ openMenu }) => openMenu ? '0': 'none'};
  z-index: ${({ theme }) => theme.zIndices.sticky};
`;
export const LinksWrapper = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.breakpoint.md};

  @keyframes navbar-slice-down {
    0% {
      background-color: balticSea;
      top: -101px;
    }
    35% {
      background-color: balticSea;
    }

    100% {
      background-color: balticSea;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
  display: none;
  }
`;
export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
  display: none;
  }
`;
export const Menu = styled.div`
display: flex;
align-items: center;
li {
    display: inline-flex;
    padding: 0 12px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    span{
      display: flex;
      padding:0 4px;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
}

`;
export const ImageMain = styled.div`
  display: flex;
`;
///**  Mobile Menu 

export const MobileNav = styled.div<StyledHeaderProps>`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    position: fixed;
    /* position: ${({ openMenu }) => openMenu ? 'fixed': 'relative'}; */
    animation:  ${({ openMenu }) => openMenu ? 'navbar-slice-down 1s': 'none'};
    top: ${({ openMenu }) => openMenu ? '0': 'none'};
    z-index: ${({ theme }) => theme.zIndices.sticky};
    width: 100%;
    height: 60px;
    background-color: ${({ theme, openMenu }) => openMenu ? theme.colors.dropdown : theme.colors.transparent};
    /* background-color: ${({ theme }) => theme.colors.transparent}; */
    justify-content: space-between;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
export const MobileLogo = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    align-items: center;
    padding-left: 24px;
    -webkit-tap-highlight-color: transparent;
  }
`;
