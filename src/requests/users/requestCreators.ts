import { UserPostDataType } from "./types";
import axiosWrapper from "../axiosWrapper";
import { UserType } from "../../store/authentication/types";
import { getUsersUrl } from "./urlParsers";

export const postNewUser = (userData: UserPostDataType) =>
  axiosWrapper<UserType>({
    url: getUsersUrl(),
    method: "POST",
    data: {
      ...userData,
    },
  });
