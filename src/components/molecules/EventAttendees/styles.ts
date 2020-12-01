import styled from "@emotion/styled";

export const AttendeesWrapper = styled.div<{ namedGrid?: boolean }>`
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;

  ${({ namedGrid }) => namedGrid && "grid-area: attendees;"}

  @media only screen and (max-width: 1024px) {
    ${({ namedGrid }) => namedGrid && "display: none;"}
  }
`;

export const AttendeesTitle = styled.div`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.darkGray};
`;

export const AttendeesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: stretch;
`;

export const NoAttendeesContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  height: 100px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const Attendee = styled.span<{ isUser: boolean }>`
  border-radius: 100px;
  padding: 0 10px;
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 31px;
  margin-right: 10px;
  margin-bottom: 10px;

  text-align: center;

  ${({ isUser, theme }) => {
    if (isUser)
      return `
        background-color: white;
        color: ${theme.colors.lighterGray};
        border: 2px solid ${theme.colors.lighterGray};
      `;
    return `
      background-color: ${theme.colors.lighterGray};
      color: ${theme.colors.lightGray};
    `;
  }}
`;
