import styled from 'styled-components';

interface StyledHeaderProps {
    openMenu: boolean;
  }
  
  export const Background = styled.div`
    height:100vh;
    max-width: ${({ theme }) => theme.breakpoint.lg};
    margin: 0 auto;
    object-fit: contain;
    /* opacity: .5; */
  `;