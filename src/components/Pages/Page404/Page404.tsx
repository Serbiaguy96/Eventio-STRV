import React from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router";
import NotLoggedUserLayout from "../../layouts/NotLoggedUserLayout";
import ErrorPageLayout from "../../layouts/ErrorPageLayout";

const Page404 = () => {
  const { formatMessage } = useIntl();
  const { push } = useHistory();
  return (
    <NotLoggedUserLayout>
      <ErrorPageLayout
        title={formatMessage({ id: "error.404" })}
        description={formatMessage({ id: "error.description" })}
        buttonString={formatMessage({ id: "common.refresh" })}
        buttonAction={() => push("/")}
      />
    </NotLoggedUserLayout>
  );
};

export default Page404;
