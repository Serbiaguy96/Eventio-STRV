import React from "react";
import { LoaderContainer, LoaderImg } from "./styles";
import loader from "../../../assets/images/loader.svg";

export type LoaderProps = {
  size?: number;
};

const Loader = ({ size = 100 }: LoaderProps) => {
  return (
    <LoaderContainer>
      <LoaderImg src={loader} size={size} />
    </LoaderContainer>
  );
};

export default Loader;
