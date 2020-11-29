import { RootState as RS } from "../types";
import { RouterStateType } from "./types";

const getRouterSlice = (state: RS) => state.router;

export const getRouterLocation = (state: RS) => getRouterSlice(state).location;

export const getRouterState = (state: RS): RouterStateType =>
  getRouterLocation(state).state as RouterStateType;

export const getRouterPathname = (state: RS) =>
  getRouterLocation(state).pathname;
