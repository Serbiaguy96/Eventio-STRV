import styled from "@emotion/styled";
import { Person } from "@material-ui/icons";

export const UsersCapacityContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextStyle = styled.span`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const PersonIcon = styled(Person)<{ isRow: boolean }>`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-right: 10px;

  ${({ isRow }) => !isRow && "display: none !important;"}
`;
