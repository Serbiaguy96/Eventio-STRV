import { useSelector } from "react-redux";
import {
  getIsUserLoading,
  getIsUserLoggedIn,
  getRequestError,
  getUserData,
} from "./selectors";

export const useUserData = () => useSelector(getUserData);

export const useIsUserLoggedIn = () => useSelector(getIsUserLoggedIn);

export const useIsUserLoading = () => useSelector(getIsUserLoading);

export const useRequestError = () => useSelector(getRequestError);
