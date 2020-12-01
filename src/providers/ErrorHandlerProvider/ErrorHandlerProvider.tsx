import React, { FC, Fragment } from "react";
import { useLocation } from "react-router";
import get from "lodash/fp/get";
import Page401 from "../../components/pages/Page401";
import CommonErrorPage from "../../components/pages/CommonErrorPage";

const ErrorHandlerProvider: FC = ({ children }) => {
  const { state } = useLocation();
  const errorStatusCode = get("errorStatusCode", state);

  if (errorStatusCode === 401) return <Page401 />;

  if (
    errorStatusCode > 401 &&
    errorStatusCode <= 510 &&
    errorStatusCode !== 404
  )
    return <CommonErrorPage />;

  return <Fragment>{children}</Fragment>;
};

export default ErrorHandlerProvider;
