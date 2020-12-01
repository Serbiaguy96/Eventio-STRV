import React from "react";
import { DeleteEventContainer, DeleteIcon } from "./styles";
import { useIntl } from "react-intl";

export type DeleteEventProps = {
  deleteAction: () => void;
};

const DeleteEvent = ({ deleteAction }: DeleteEventProps) => {
  const { formatMessage } = useIntl();
  return (
    <DeleteEventContainer onClick={deleteAction}>
      <DeleteIcon />
      <span>{formatMessage({ id: "event.delete" })}</span>
    </DeleteEventContainer>
  );
};

export default DeleteEvent;
