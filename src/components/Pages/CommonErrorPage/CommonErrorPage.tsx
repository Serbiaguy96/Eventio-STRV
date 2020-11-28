import React from "react";
import NotLoggedUserLayout from "../../layouts/NotLoggedUserLayout";
import ErrorPageLayout from "../../layouts/ErrorPageLayout";
import { useIntl } from "react-intl";

const CommonErrorPage = () => {
  const { formatMessage } = useIntl();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <NotLoggedUserLayout>
      <ErrorPageLayout
        title={formatMessage({ id: "error.401" })}
        description={formatMessage({ id: "error.401.description" })}
        buttonString={formatMessage({ id: "sign_in.main" })}
        buttonAction={reloadPage}
      />
    </NotLoggedUserLayout>
  );
};

export default CommonErrorPage;
