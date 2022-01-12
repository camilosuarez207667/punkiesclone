import styled from "styled-components";

export const DesktopNav = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: ${({ theme }) => theme.zIndices.sticky};
`;
export const LinksWrapper = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.breakpoint.md};
`;
export const LinksContainer = styled.div`
  position: relative;
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
    span {
      display: flex;
      padding: 0 4px;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
export const ImageMain = styled.div`
  display: flex;
`;

export const ImagePadding = styled.div`
  padding: 8px 0;
`;
export const ImagePaddingMobile = styled.div`
  padding: 0 0 4px 0;
`;
///**  Mobile Menu
//In case mobile dropdown needs a color height.

export const MobileNav = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: ${({ theme }) => theme.zIndices.sticky};
  }
`;
export const MobileLogo = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    align-items: center;
    padding: 5px 0 0 4px;
    -webkit-tap-highlight-color: transparent;
  }
`;
