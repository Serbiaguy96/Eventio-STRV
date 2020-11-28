import axiosWrapper from "../axiosWrapper";
import { RefreshTokenReturnType } from "./types";
import { userAuthentication } from "./urlParsers";

export const refreshTokenAuthentication = (refreshToken: string) =>
  axiosWrapper<RefreshTokenReturnType>({
    url: userAuthentication(),
    method: "POST",
    data: {
      refreshToken,
    },
  });
