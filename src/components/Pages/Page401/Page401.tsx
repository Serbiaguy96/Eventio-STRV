import React from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router";
import NotLoggedUserLayout from "../../layouts/NotLoggedUserLayout";
import ErrorPageLayout from "../../layouts/ErrorPageLayout";

const Page401 = () => {
  const { formatMessage } = useIntl();
  const { push } = useHistory();

  return (
    <NotLoggedUserLayout>
      <ErrorPageLayout
        title={formatMessage({ id: "error.401" })}
        description={formatMessage({ id: "error.401.description" })}
        buttonString={formatMessage({ id: "sign_in.main" })}
        buttonAction={() => push("/signIn", { errorStatusCode: null })}
      />
    </NotLoggedUserLayout>
  );
};

export default Page401;
