import React from "react";
import { StyledRoundButton } from "./styles";
import { useHistory, useLocation } from "react-router";
import { Add, Check } from "@material-ui/icons";

type ButtonType = "edit" | "create";

export type RoundButtonProps = {
  buttonAction?: () => void;
  buttonType: ButtonType;
};

const RoundButton = ({ buttonAction, buttonType }: RoundButtonProps) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const visible =
    pathname === "/" ||
    pathname.includes("/detail") ||
    pathname.includes("/create-event") ||
    pathname.includes("/edit");

  const action = buttonAction
    ? buttonAction
    : () => push("/create-event", { from: pathname });

  return (
    <StyledRoundButton
      onClick={action}
      isCreate={buttonType === "create"}
      visible={visible}
    >
      {buttonType === "create" ? <Add /> : <Check />}
    </StyledRoundButton>
  );
};

export default RoundButton;
