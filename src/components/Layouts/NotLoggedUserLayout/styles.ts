import styled from "@emotion/styled";
import bgImage from "../../../assets/images/login-background.png";

export const NotLoggedUserLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AsideImageContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 100vh;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.darkGray};

  &:after {
    content: "";
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const QuoteContainer = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const QuoteString = styled.span`
  font-family: Playfair Display;
  font-style: normal;
  color: white;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
`;

export const QuoteDivider = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 25px;
  margin-bottom: 10px;
`;

export const QuoteAuthor = styled.span`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const LayoutContentContainer = styled.div`
  margin-left: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;
