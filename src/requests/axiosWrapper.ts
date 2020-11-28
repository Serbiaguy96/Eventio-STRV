import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { AError } from "./types";
import { API_KEY } from "../global/globalConstants";

export interface ResponseWithError<T> extends AxiosResponse<T> {
  errors?: AError;
}

function updateRequestConfig(config: AxiosRequestConfig): AxiosRequestConfig {
  const authToken = localStorage.getItem("authToken");
  const basicConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      "Content-Type": "application/json",
      APIKey: API_KEY,
    },
  };

  if (!authToken) return basicConfig;

  return {
    ...basicConfig,
    headers: {
      Authorization: `Bearer${authToken}`,
    },
  };
}
async function axiosWrapper<T>(
  userConfig: AxiosRequestConfig
): Promise<ResponseWithError<T>> {
  try {
    const config = updateRequestConfig(userConfig);
    return await axios(config);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default axiosWrapper;
