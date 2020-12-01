import React from "react";
import { useIntl } from "react-intl";
import ErrorPageLayout from "../../Layouts/ErrorPageLayout";
import { useHistoryActions } from "../../../store/router/useActions";
import AsidePictureLayout from "../../Layouts/AsidePictureLayout";
import { useLogUserOut } from "../../../store/authentication/useActions";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../../../global/globalConstants";

const Page401 = () => {
  const { formatMessage } = useIntl();
  const { replace } = useHistoryActions();
  const logUserOut = useLogUserOut();

  const logOutUserAction = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    logUserOut();
    replace("/signIn", { errorStatusCode: null });
  };

  return (
    <AsidePictureLayout>
      <ErrorPageLayout
        title={formatMessage({ id: "error.401" })}
        description={formatMessage({ id: "error.401.description" })}
        buttonString={formatMessage({ id: "sign_in.main" })}
        buttonAction={logOutUserAction}
      />
    </AsidePictureLayout>
  );
};

export default Page401;
