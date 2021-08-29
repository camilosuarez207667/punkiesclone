import styled from 'styled-components';
interface MenuProps {
  open: boolean;
  width: string;
}

export const Wrapper = styled.div`
  width: 100%;
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
outline: 1px solid red;
li {
    display: inline;
    padding-right: 24px;
    font-family: 'Metal Mania', cursive;
    font-size: 24px;
    outline: 1px solid red;
    span{
      padding:0 4px;
    }
}
`;
export const ImageMain = styled.div`
  display: flex;
`;
export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: blanchedalmond;
    justify-content: space-between;
  }
`;
export const MobileMenu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    align-items: center;
  }
`;

export const MobileLogo = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    align-items: center;
  }
`;
