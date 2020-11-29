import { replace } from "connected-react-router";
import { EventioThunk } from "../types";
import { getAreEventsLoading } from "./selectors";
import { fetchAllEvents } from "../../requests/events/requestCreators";
import { receiveEvents, setEventsLoading } from "./actionCreators";
import { getRouterPathname } from "../router/selectors";

export const fetchAllEventsThunk = (): EventioThunk => (dispatch, getState) => {
  const state = getState();
  const isLoading = getAreEventsLoading(state);
  if (isLoading) return;

  dispatch(setEventsLoading(true));
  fetchAllEvents()
    .then(({ data }) => {
      dispatch(receiveEvents(data));
    })
    .catch(({ response }) => {
      const pathname = getRouterPathname(state);
      dispatch(replace(pathname, { errorStatusCode: response.status }));
    })
    .finally(() => {
      dispatch(setEventsLoading(false));
    });
};
