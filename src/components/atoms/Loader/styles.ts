import styled from "@emotion/styled";

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderImg = styled.img<{ size: number }>`
  ${({ size }) => `width: ${size}px; height: ${size}px`};
`;
