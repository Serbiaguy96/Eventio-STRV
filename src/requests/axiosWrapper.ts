import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { AError } from "./types";
import { API_KEY, AUTH_TOKEN, BASE_URL } from "../global/globalConstants";

export interface ResponseWithError<T> extends AxiosResponse<T> {
  errors?: AError;
}

function updateRequestConfig(
  config: AxiosRequestConfig,
  auth?: boolean
): AxiosRequestConfig {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const basicConfig: AxiosRequestConfig = {
    ...config,
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY,
    },
  };

  if (!authToken || !auth) return basicConfig;

  return {
    ...basicConfig,
    headers: {
      ...basicConfig.headers,
      Authorization: authToken,
    },
  };
}
async function axiosWrapper<T>(
  userConfig: AxiosRequestConfig,
  auth?: boolean
): Promise<ResponseWithError<T>> {
  try {
    const config = updateRequestConfig(userConfig, auth);
    return await axios(config);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default axiosWrapper;
