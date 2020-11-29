import React from "react";
import { useIntl } from "react-intl";
import ErrorPageLayout from "../../layouts/ErrorPageLayout";
import { useHistoryActions } from "../../../store/router/useActions";
import AsidePictureLayout from "../../layouts/AsidePictureLayout";

const Page401 = () => {
  const { formatMessage } = useIntl();
  const { replace } = useHistoryActions();

  return (
    <AsidePictureLayout>
      <ErrorPageLayout
        title={formatMessage({ id: "error.401" })}
        description={formatMessage({ id: "error.401.description" })}
        buttonString={formatMessage({ id: "sign_in.main" })}
        buttonAction={() => replace("/signIn", { errorStatusCode: null })}
      />
    </AsidePictureLayout>
  );
};

export default Page401;
