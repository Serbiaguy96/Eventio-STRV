import styled from "@emotion/styled";

export const EventsListContainer = styled.div<{ inRow: boolean }>`
  display: grid;
  ${({ inRow }) => {
    if (inRow)
      return `
        grid-template-columns: 3.25fr 3.25fr 3.25fr;
        grid-auto-rows: 300px;
        gap: 17px;
        
        @media only screen and (min-width: 1600px) {
          grid-template-columns: 24fr 24fr 24fr 24fr;
        }
        
        @media only screen and (min-width: 1025px) and (max-width:1250px) {
          grid-template-columns: 49fr 49fr;
        }
        
        @media only screen and (max-width: 1024px) {
          grid-template-columns: 10fr;
          row-gap: 10px;
        }
      `;
    return `
      grid-template-columns: 10fr;
      grid-auto-rows: 70px;
      row-gap: 10px;
      
      @media only screen and (max-width: 1024px) {
          grid-auto-rows: 150px;
          row-gap: 10px;
        }
    `;
  }}
`;
