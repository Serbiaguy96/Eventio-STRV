import useViewPortDimension from "./useViewPortDimension";

const isMobile = () => {
  const { x } = useViewPortDimension();
  return x <= 1024;
};

export default isMobile;
