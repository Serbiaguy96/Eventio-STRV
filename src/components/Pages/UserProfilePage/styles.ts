import styled from "@emotion/styled";

export const UserProfileHeaderContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  width: 100%;
  height: 189px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
`;

export const UserProfileInitials = styled.div`
  background-color: ${({ theme }) => theme.colors.lighterGray};
  color: ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  width: 120px;
  height: 120px;
  left: 50%;
  transform: translateX(-50%);
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  top: -60px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`;

export const StyledUserName = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  text-transform: capitalize;

  text-align: center;
`;

export const StyledEmail = styled.span`
  color: ${({ theme }) => theme.colors.lighterGray};
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  text-align: center;
`;

export const UserEventsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  @media only screen and (max-width: 1024px) {
    width: 95%;
    margin: 0 auto 15px auto;
  }
`;

export const EventsTitle = styled.span`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
