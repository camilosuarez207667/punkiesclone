import styled from 'styled-components';
interface MenuProps {
  open: boolean;
  width: string;
}

export const Wrapper = styled.div`
  width: 100%;
  background-color: black;
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
    display: inline;
    padding: 0 12px;
    font-family: 'Metal Mania', cursive;
    font-size: 24px;
    color: #fff;
    span{
      padding:0 4px;
    }
    #svg-color:hover {
      fill: orange;
    }
    a:hover {
      color: red;
    }
}

`;
export const ImageMain = styled.div`
  display: flex;
`;
///**  Mobile Menu 
export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: black;
    justify-content: space-between;
  }
`;
export const MobileMenu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    align-items: center;
    padding-left: 24px;
    -webkit-tap-highlight-color: transparent;
  }
`;
export const MobileLogo = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    align-items: center;
    padding-right: 24px;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
`;

export const MobileList = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    background-color: black;
    display: flex;
    justify-content: center;
    li {
      color: white;
      font-family: 'Metal Mania', cursive;
      padding: 12px 0;
      font-size: 24px;
      list-style-type: none;
    a:hover {
      color: red;
    }
    }
  }
`;

export const MobileSocial = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    background-color: black;
    display: flex;
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