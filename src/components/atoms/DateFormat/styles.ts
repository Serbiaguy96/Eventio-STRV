import styled from "@emotion/styled";

export const DateContainer = styled.div<{ inRow: boolean }>`
  color: ${({ theme }) => theme.colors.lighterGray};
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
`;
