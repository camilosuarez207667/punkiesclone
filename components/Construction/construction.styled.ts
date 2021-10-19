import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
}

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
`;

export const Column = styled.div`
  background-color: red;
  width: 50%;
`;
