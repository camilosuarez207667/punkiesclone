import styled from 'styled-components';

interface StyledHeaderProps {
    openMenu: boolean;
  }
  
  export const Background = styled.div`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoint.lg};
    /* height: 900px; */
    height: 100vh;
    max-height: 100%;
    /* border: 10px solid red; */
    object-fit: cover !important;
    /* height: 100%; 
    width: 100%;  */
   
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    height: 100vh;
    /* img {
      object-fit: contain;
      border: 1px solid red;
      z-index: 6000;
    } */
  } 

    /* opacity: .5; */
    /* @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 100vh;
    outline: 10px solid green;
  } */
  `;