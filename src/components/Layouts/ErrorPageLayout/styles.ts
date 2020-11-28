import styled from "@emotion/styled";
import bgImage from "../../../assets/images/error-background.png";

export const ErrorPageContainer = styled.div``;

export const ErrorPageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

export const ErrorPageBgImage = styled.div`
  width: 446px;
  height: 433px;
  position: fixed;
  top: 50%;
  left: calc(50% - 150px);
  transform: translate(-50%, -50%);
  background-image: url(${bgImage});
  background-size: cover;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ErrorTitle = styled.span`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 48px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ErrorDescription = styled.p`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 0;
  white-space: pre;

  @media only screen and (max-width: 1024px) {
    white-space: normal;
    text-align: center;
  }
`;
