import React from "react";
import ErrorPageLayout from "../../layouts/ErrorPageLayout";
import { useIntl } from "react-intl";
import { useHistoryActions } from "../../../store/router/useActions";
import { useLocation } from "react-router";
import AsidePictureLayout from "../../layouts/AsidePictureLayout";

const CommonErrorPage = () => {
  const { formatMessage } = useIntl();
  const { replace } = useHistoryActions();
  const { pathname } = useLocation();

  return (
    <AsidePictureLayout>
      <ErrorPageLayout
        title={formatMessage({ id: "error.something" })}
        description={formatMessage({ id: "error.description" })}
        buttonString={formatMessage({ id: "common.refresh" })}
        buttonAction={() => replace(pathname, { errorStatusCode: null })}
      />
    </AsidePictureLayout>
  );
};

export default CommonErrorPage;
