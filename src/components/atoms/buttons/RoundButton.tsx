import React from "react";
import { StyledRoundButton } from "./styles";
import { useHistory, useLocation } from "react-router";
import { Add, Check } from "@material-ui/icons";
import { useIsUserLoggedIn } from "../../../store/authentication/useSelectors";
import { noop } from "lodash/fp";

type ButtonType = "edit" | "create";

export type RoundButtonProps = {
  buttonType: ButtonType;
  isSubmit?: boolean;
  formId?: string;
};

const RoundButton = ({ formId, isSubmit, buttonType }: RoundButtonProps) => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const isUserLogged = useIsUserLoggedIn();

  const visible =
    isUserLogged &&
    (pathname === "/" ||
      pathname.includes("/event-detail") ||
      pathname.includes("/create-event") ||
      pathname.includes("/edit-event"));

  const action = !isSubmit
    ? () => push("/create-event", { from: pathname })
    : noop;

  return (
    <StyledRoundButton
      type={isSubmit ? "submit" : "button"}
      onClick={action}
      isCreate={buttonType === "create"}
      visible={visible}
      form={formId}
    >
      {buttonType === "create" ? <Add /> : <Check />}
    </StyledRoundButton>
  );
};

export default RoundButton;
