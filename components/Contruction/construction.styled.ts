import styled from 'styled-components';

interface StyledHeaderProps {
    openMenu: boolean;
  }
  
  export const Background = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 44px; 
    background-color: white;
    font-family: ${({ theme }) => theme.fonts.primary};
    z-index: 500;
    font-size: 32px;
    display: flex;
    justify-content: center;
    opacity: 0.18;
    border: 0;
  `;