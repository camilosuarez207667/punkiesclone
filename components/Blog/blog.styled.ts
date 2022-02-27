import styled from "styled-components";

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TitleParagraph = styled.div`
  padding-right: 24px;
  p {
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 24px;
  }
`;

export const DropdownWrapper = styled.div`
  width: 100%;
  align-items: flex-end;
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
`;
export const Dropdown = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
export const FullWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
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

export const DropdownList = styled.li`
  display: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.shark};
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
export const Title = styled.div`
  min-height: 50px;
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
export const Fecha = styled.div`
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
export const PaginationWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 24px auto 0;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
  }
`;
export const ArrowLeft = styled.div`
  margin-right: 20px;
  transform: rotate(270deg);
  width: 28px;
  height: 28px;
  z-index: ${({ theme }) => theme.zIndices.docked};
`;
export const ArrowRight = styled.div`
  margin-left: 20px;
  transform: rotate(90deg);
  width: 28px;
  height: 28px;
  z-index: ${({ theme }) => theme.zIndices.docked};
`;
