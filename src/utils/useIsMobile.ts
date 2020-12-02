import useViewPortDimension from "./useViewPortDimension";

const useIsMobile = () => {
  const { x } = useViewPortDimension();
  return x <= 1024;
};

export default useIsMobile;
