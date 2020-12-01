import React from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router";
import ErrorPageLayout from "../../Layouts/ErrorPageLayout";
import AsidePictureLayout from "../../Layouts/AsidePictureLayout";

const Page404 = () => {
  const { formatMessage } = useIntl();
  const { push } = useHistory();
  return (
    <AsidePictureLayout>
      <ErrorPageLayout
        title={formatMessage({ id: "error.404" })}
        description={formatMessage({ id: "error.description" })}
        buttonString={formatMessage({ id: "common.refresh" })}
        buttonAction={() => push("/")}
      />
    </AsidePictureLayout>
  );
};

export default Page404;
