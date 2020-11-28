import React from "react";
import { ErrorPageContainer } from "./styles";

export type ErrorPageLayoutProps = {
  title: string;
  description: string;
  buttonString: string;
  buttonAction: () => void;
};

const ErrorPageLayout = ({
  title,
  description,
  buttonString,
  buttonAction,
}: ErrorPageLayoutProps) => {
  return <ErrorPageContainer>pico</ErrorPageContainer>;
};

export default ErrorPageLayout;
