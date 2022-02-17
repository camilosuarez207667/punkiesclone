import styled from "styled-components";

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  p {
    color: ${({ theme }) => theme.colors.white};
    padding: 32px 0 24px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 0 24px;
  }
`;

export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const BothComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 160px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: 1fr;
  }
`;
export const DropdownWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    outline: 1px solid red;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0 24px;

    .dropdown .dropdown_menu--animated {
      display: block;
    }

    .dropdown_menu--animated {
      display: none;
    }

    .dropdown_menu--animated li {
      display: block;
      opacity: 1;
    }

    .dropdown_animation {
      animation: growDown 300ms ease-in-out forwards;
      transform-origin: top center;
    }

    @keyframes growDown {
      0% {
        transform: scaleY(0);
      }
      80% {
        transform: scaleY(1.1);
      }
      100% {
        transform: scaleY(1);
      }
    }
  }
`;

export const Dropdown = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  perspective: 1000px;
  margin-bottom: 24px;
  cursor: pointer;
  background-color: transparent;
  outline: 1px solid white;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  perspective: 1000px;
  z-index: -1;
  li:hover {
    background-color: ${({ theme }) => theme.colors.jaguar};
  }
`;

export const DropdownList = styled.li`
  display: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.balticSea};
  padding: 10px 20px;
  font-size: 16px;
  opacity: 0;
  text-align: center;
`;

export const ArrowContent = styled.div`
  margin-top: 4px;
  transform: rotate(180deg);
  width: 20px;
  height: 20px;
  z-index: ${({ theme }) => theme.zIndices.docked};
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
export const ArchiveWrapper = styled.div`
  display: block;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
`;
export const Title = styled.div`
  height: 50px;
  border-bottom: 1px solid white;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding-top: 6px;
`;
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
export const Date = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.secondary};
    text-align: right;
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding: 4px 0 16px;
  }
`;
export const ReadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  border-bottom: 1px solid white;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding: 8px 0 16px;
    color: ${({ theme }) => theme.colors.tertiary};
  }
  img {
    margin-right: 16px;
    width: 40px;
    height: 40px;
  }
`;
export const ReadMore = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding: 8px 0 16px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export const Archive = styled.div`
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0 auto;
  padding: 12px 8px 8px 16px;
`;
export const Year = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 0 8px 8px 16px;
`;
