import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { logUserInThunk, logUserOutThunk, postNewUserThunk } from "./thunks";
import { UserType } from "./types";
import { receiveUserData } from "./actionCreators";
import { SignInFormType } from "../../requests/authentication/types";
import { UserPostDataType } from "../../requests/users/types";

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
  return useCallback(() => dispatch(logUserOutThunk()), [dispatch]);
};

export const usePostNewUser = () => {
  const dispatch = useDispatch();
  return useCallback(
    (userData: UserPostDataType) => dispatch(postNewUserThunk(userData)),
    [dispatch]
  );
};
