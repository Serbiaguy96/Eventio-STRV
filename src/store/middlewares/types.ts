import { Action, Dispatch } from "redux";
import { UserType } from "../authentication/types";

export interface MiddlewareDispatch<S> {
  (action: Action): Action | undefined;
}

export interface MiddlewareAPI<S> {
  dispatch: MiddlewareDispatch<S>;
  getState(): S;
}

export interface MiddlewareType<S> {
  (api: MiddlewareAPI<S>): (
    next: MiddlewareDispatch<S>
  ) => MiddlewareDispatch<S>;
}

export interface JwtTokenType {
  user: UserType;
  iat: number;
  exp: number;
  iss: string;
}
