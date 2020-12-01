import styled from "@emotion/styled";

export const NothingToSeeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageContainer = styled.div`
  color: ${({ theme }) => theme.colors.lighterGray};
  font-family: Hind;
  font-weight: normal;
  font-size: 20px;
  padding: 20px;
  text-transform: uppercase;
  text-align: center;
  width: 200px;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.lighterGray};
  border-radius: 8px;
`;
