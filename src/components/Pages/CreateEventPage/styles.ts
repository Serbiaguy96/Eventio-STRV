import styled from "@emotion/styled";

export const CreateEventPageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  @media only screen and (max-width: 1024px) {
    margin-top: 30px;
  }
`;

export const CreateEventFormContainer = styled.div`
  width: 480px;
  height: 610px;
  background-color: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 1024px) {
    width: 95%;
    height: 480px;
  }
`;

export const CreateEventHeaderContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const CreateEventHeader = styled.span`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const CreateEventDescription = styled.span`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 64px);

  @media only screen and (max-width: 1024px) {
    width: calc(100% - 30px);
  }
`;
