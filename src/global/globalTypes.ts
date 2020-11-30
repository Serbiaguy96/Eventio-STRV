import { ReactNode, ComponentType } from "react";

export interface StringIndexedDictionary<T> {
  [key: string]: T;
}

export interface NumberIndexedDictionary<T> {
  [key: number]: T;
}

export interface AppLayoutProps {
  component?: ComponentType<any>;
  render?: (matchProps: any) => ReactNode;
  exact?: boolean;
  path?: string;
  insideApp?: boolean;
}
