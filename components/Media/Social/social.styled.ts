import styled from "styled-components";

export const SocialWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 16px auto 0;
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0 0 0 24px;

  .amazon {
    svg {
      width: 44px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 32px;
      }
    }
  }
  .spotify {
    svg {
      width: 40px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 32px;
      }
    }
  }
  .youtube {
    svg {
      width: 44px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 32px;
      }
    }
  }
  .sound {
    svg {
      width: 56px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 32px;
      }
    }
  }
  .download {
    svg {
      width: 36px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      svg {
        width: 24px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    -webkit-tap-highlight-color: transparent;
    padding: 0 0 0 24px;
  }
`;
export const SocialText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding-right: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding-right: 8px;
  }
`;
export const SocialItems = styled.div`
  padding: 0 8px;
  cursor: pointer;
  svg:hover {
    fill: ${({ theme }) => theme.colors.tertiary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0 4px;
  }
`;
