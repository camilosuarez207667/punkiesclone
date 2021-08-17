import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  outline: 1px solid red;
`;

export const SubWrapper = styled.div`
  /* width: 1200px; */
   width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  outline: 5px solid orange;
`;

export const Menu = styled.div`
ul {
    height: 50px;
    line-height: 50px;
}
li {
    outline: 1px solid green;
    display: inline;
    padding-right: 24px;
}
`;