import styled from "@emotion/styled";

export const SignContainer = styled.div`
  position: fixed;
  margin-top: 40px;
  top: 0;
  right: 1rem;
  font-family: Hind;
  font-size: 14px;
  line-height: 24px;

  @media only screen and (max-width: 1024px) {
    position: relative;
    top: auto;
    right: auto;
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
