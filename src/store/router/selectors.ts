import { RootState as RS } from "../types";

const getRouterSlice = (state: RS) => state.router;

export const getRouterLocation = (state: RS) => getRouterSlice(state).location;

export const getRouterPathname = (state: RS) =>
  getRouterLocation(state).pathname;
