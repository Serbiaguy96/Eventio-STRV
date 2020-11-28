import axiosWrapper from "../axiosWrapper";
import { RefreshTokenReturnType, SignInFormType } from "./types";
import { userAuthentication } from "./urlParsers";
import { UserType } from "../../store/authentication/types";

export const refreshTokenAuthentication = (refreshToken: string) =>
  axiosWrapper<RefreshTokenReturnType>({
    url: userAuthentication(),
    method: "POST",
    data: {
      refreshToken,
    },
  });

export const logInUser = ({ email, password }: SignInFormType) =>
  axiosWrapper<UserType>({
    url: userAuthentication(),
    method: "POST",
    data: { email, password },
  });
