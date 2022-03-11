import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 16px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
  .both:hover .button-active {
    opacity: 1;
  }
  .both:hover .image-active {
    opacity: 0.3;
  }
`;
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-bottom: 48px;
  cursor: pointer;
`;
export const ImageHeading = styled.div`
  max-width: 280px;
  display: flex;
  transition: 0.5s ease;
  opacity: 1;
  backface-visibility: hidden;
`;
export const MoreButton = styled.div`
  position: absolute;
  transition: 0.5s ease;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
`;
export const MoreIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 16px;
  padding: 16px 32px;
`;
export const WrapperSvg = styled.div`
  width: 40px;
  margin: 0 auto;
  padding-bottom: 8px;
`;
export const WrapperMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: flex;
    height: 304px;
    padding: 24px 24px 0;
  }
`;
