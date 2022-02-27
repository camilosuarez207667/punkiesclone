import styled from "styled-components";

interface NavProps {
  highlighted: boolean;
}

export const DesktopNav = styled.div`
  width: 100%;
  position: fixed;
  height: 121px;
  opacity: 0.9;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: ${({ theme }) => theme.zIndices.sticky};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const LinksWrapper = styled.div`
  width: ${({ theme }) => theme.breakpoint.md};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 0 auto;
  z-index: ${({ theme }) => theme.zIndices.banner};
`;
export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  z-index: ${({ theme }) => theme.zIndices.banner};
  width: ${({ theme }) => theme.breakpoint.md};
  position: fixed;
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
    .active {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
export const ImageMain = styled.div`
  display: flex;
`;

export const ImagePadding = styled.div`
  padding: 14px 0 0;
  width: 260px;
  height: 94px;
`;
export const ImagePaddingMobile = styled.div`
  padding-left: 24px;
  height: 60px;
  display: flex;
  align-items: center;
  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 26px;
  }
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
