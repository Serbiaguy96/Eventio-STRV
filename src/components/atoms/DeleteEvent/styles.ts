import styled from "@emotion/styled";
import { Delete } from "@material-ui/icons";

export const DeleteEventContainer = styled.div`
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  span {
    border-bottom: 1px solid transparent;
  }

  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.errorRed};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverErrorRed};

    span {
      border-bottom: 1px solid ${({ theme }) => theme.colors.hoverErrorRed};
    }
  }

  @media only screen and (max-width: 1024px) {
    span {
      display: none;
    }
  }
`;

export const DeleteIcon = styled(Delete)`
  margin-right: 10px;
`;
