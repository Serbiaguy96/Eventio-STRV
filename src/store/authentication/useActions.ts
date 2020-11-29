import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { logUserInThunk } from "./thunks";
import { UserType } from "./types";
import { receiveUserData, removeUserData } from "./actionCreators";
import { SignInFormType } from "../../requests/authentication/types";
import { useHistory } from "react-router";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../../global/globalConstants";

export const useLogInUser = () => {
  const dispatch = useDispatch();
  return useCallback(
    ({ email, password }: SignInFormType) =>
      dispatch(logUserInThunk(email, password)),
    [dispatch]
  );
};

export const useLogLoggedUser = () => {
  const dispatch = useDispatch();
  return useCallback(
    (userData: UserType) => dispatch(receiveUserData(userData)),
    [dispatch]
  );
};

export const useLogUserOut = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  return useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    dispatch(removeUserData());
    push("/");
  }, [dispatch]);
};
