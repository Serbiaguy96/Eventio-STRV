import useViewPortDimension from "./useViewPortDimension";

export default () => {
  const { x } = useViewPortDimension();
  return x <= 1024;
};
