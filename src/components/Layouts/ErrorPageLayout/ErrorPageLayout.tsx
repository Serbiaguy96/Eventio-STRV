import React from "react";
import {
  ErrorDescription,
  ErrorPageBgImage,
  ErrorPageContainer,
  ErrorPageContentContainer,
  ErrorTitle,
} from "./styles";
import { ErrorButton } from "../../atoms/buttons";

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
  return (
    <ErrorPageContainer>
      <ErrorPageBgImage />
      <ErrorPageContentContainer>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorDescription>{description}</ErrorDescription>
        <ErrorButton label={buttonString} action={buttonAction} />
      </ErrorPageContentContainer>
    </ErrorPageContainer>
  );
};

export default ErrorPageLayout;
