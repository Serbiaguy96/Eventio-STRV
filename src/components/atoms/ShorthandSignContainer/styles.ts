import styled from "@emotion/styled";

export const SignContainer = styled.div`
  font-family: Hind;
  font-size: 14px;
  line-height: 24px;

  @media only screen and (max-width: 1024px) {
    position: relative;
  }
`;

export const LighterGraySpan = styled.span`
  color: ${({ theme }) => theme.colors.lighterGray};
  font-weight: 500;
`;

export const LightGraySpan = styled.button`
  color: ${({ theme }) => theme.colors.lightGray};
  text-transform: uppercase;
  font-weight: bold;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
