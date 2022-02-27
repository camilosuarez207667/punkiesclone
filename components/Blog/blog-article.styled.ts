import styled from "styled-components";

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const BlogComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: 1fr;
  }
`;

/////// MOBILE DROPDOWN ///////////
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  padding: 0 24px;
`;
export const BlogWrapper = styled.div`
  width: 100%;
`;
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
export const Fecha = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0 8px;
`;
export const Profile = styled.div`
  display: flex;
  img {
    margin-right: 16px;
    width: 40px;
    height: 40px;
  }
`;
export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.tertiary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
`;
