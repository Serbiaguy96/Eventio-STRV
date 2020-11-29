import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { push, replace } from "connected-react-router";
import { RouterStateType } from "./types";

export const useHistoryActions = () => {
  const dispatch = useDispatch();

  const pushAction = (route: string) => dispatch(push(route));

  const replaceAction = (path: string, routerState?: RouterStateType) =>
    dispatch(replace(path, routerState));

  return {
    push: useCallback(pushAction, [dispatch]),
    replace: useCallback(replaceAction, [dispatch]),
  };
};
