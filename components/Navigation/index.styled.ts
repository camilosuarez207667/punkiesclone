import styled from 'styled-components';

export const DesktopNav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparent};
  position: absolute;
`;
export const LinksWrapper = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.breakpoint.md};
  .header__down {
    position: fixed;
    height: 50px;
    top: 0%;
    left: 0;
    width: ${({ theme }) => theme.breakpoint.md};
    background-color: ${({ theme }) => theme.colors.blue};;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    animation: navbar-slice-down 1s;
    left: 50%;
    transform: translate(-50%, 0); 
  }
  @keyframes navbar-slice-down {
    0% {
      background-color: blue;
      top: -101px;
    }
    35% {
      background-color: greenyellow;
    }

    100% {
      background-color: red;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
  display: none;
  }
`;
export const LinksContainer = styled.div`
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

export const MobileNav = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.transparent};
    justify-content: space-between;
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
