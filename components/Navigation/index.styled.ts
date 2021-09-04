import styled from 'styled-components';

export const DesktopNav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparent};
`;
export const LinksWrapper = styled.div`
  width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
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
