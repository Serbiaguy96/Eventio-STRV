import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { push } from "connected-react-router";

export const usePushAction = () => {
  const dispatch = useDispatch();
  return useCallback((route: string) => dispatch(push(route)), [dispatch]);
};
