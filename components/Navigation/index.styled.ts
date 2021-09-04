import styled from 'styled-components';
interface MenuProps {
  open: boolean;
}

export const DesktopNav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
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
    font-family: 'Metal Mania', cursive;
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
    background-color: ${({ theme }) => theme.colors.primary};
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
export const MobileMenu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    align-items: center;
    padding-right: 24px;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
`;
export const MobileList = styled.div<MenuProps>`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    background-color: ${({ theme }) => theme.colors.primary};
    display: ${({ open }) => (open ? `'none'` : 'flex')};
    justify-content: center;
    li {
      color: white;
      font-family: 'Metal Mania', cursive;
      padding: 12px 0;
      font-size: 24px;
      list-style-type: none;
    a:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
    }
  }
`;
export const MobileSocial = styled.div<MenuProps>`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    background-color: ${({ theme }) => theme.colors.primary};
    display: ${({ open }) => (open ? `'none'` : 'flex')};;
    justify-content: center;
    cursor: pointer;
    span{
      color: white;
      font-family: 'Metal Mania', cursive;
      padding: 12px 8px;
      font-size: 24px;
      list-style-type: none;
    }
  }
`;