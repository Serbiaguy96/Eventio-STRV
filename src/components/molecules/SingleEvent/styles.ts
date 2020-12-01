import styled from "@emotion/styled";

type IsRow = {
  isRow: boolean;
  isClickable?: boolean;
};

export const EventContainer = styled.div<IsRow>`
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  display: grid;
  justify-self: stretch;
  justify-items: start;
  align-items: center;
  ${({ isClickable }) => isClickable && "cursor: pointer;"}

  ${({ isRow }) => {
    if (!isRow)
      return `
        padding: 0 20px;
        grid-template-columns: 2.5fr 2.5fr 1fr 2fr 1fr 1fr;
        grid-template-areas: 
          "title description name date capacity button";
          
        @media only screen and (max-width: 1024px) {
          grid-template-columns: 6fr 4fr;
          grid-template-rows: 2.5fr 2.5fr 2.5fr 2.5fr;
          padding: 10px 20px;
          grid-template-areas: 
            "title title"
            "description description"
            "date button"
            "capacity button";
        }  
      `;
    return `
      padding: 10px 20px;
      grid-template-columns: 2.5fr 2.5fr 2.5fr 2.5fr;
      grid-template-rows: 2.5fr 1fr 2fr 2.5fr 2fr;
      grid-template-areas:
        "date date date date"
        "title title title title"
        "name name name name"
        "description description description ."
        "capacity capacity button button";
    `;
  }}
`;

export const EventTitle = styled.span<IsRow>`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.darkGray};
  grid-area: title;
`;

export const EventUser = styled.span<IsRow>`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.lightGray};
  grid-area: name;
  ${({ isRow }) => isRow && "align-self: start;"}

  @media only screen and (max-width: 1024px) {
    ${({ isRow }) => !isRow && "display: none;"}
  }
`;

export const EventDescription = styled.p<IsRow>`
  margin: 0;
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lighterGray};
  grid-area: description;
  ${({ isRow }) => isRow && "align-self: start;"}
  ${({ isRow }) =>
    !isRow &&
    "max-width: 80%;text-overflow: ellipsis; white-space: nowrap; overflow: hidden;"}
`;

export const DateFlexContainer = styled.div<IsRow>`
  grid-area: date;
`;

export const CapacityFlexContainer = styled.div<IsRow>`
  grid-area: capacity;
`;

export const ButtonFlexContainer = styled.div`
  grid-area: button;
  justify-self: end;
`;
