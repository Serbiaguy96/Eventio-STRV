import styled from "@emotion/styled";

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 450px;

  @media only screen and (max-width: 1024px) {
    align-items: center;
    margin: 20px;
  }
`;

export const SignInTitle = styled.span`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;

  @media only screen and (max-width: 1024px) {
    line-height: 30px;
  }
`;

export const SignInMessage = styled.span<{ error: boolean }>`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;

  color: ${({ theme, error }) =>
    error ? theme.colors.errorRed : theme.colors.lightGray};

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0px;
  }
`;
