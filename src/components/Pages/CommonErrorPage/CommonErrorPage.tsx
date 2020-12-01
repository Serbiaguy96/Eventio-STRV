import React from "react";
import { useLocation } from "react-router";
import { useIntl } from "react-intl";
import ErrorPageLayout from "../../Layouts/ErrorPageLayout";
import { useHistoryActions } from "../../../store/router/useActions";
import AsidePictureLayout from "../../Layouts/AsidePictureLayout";

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
