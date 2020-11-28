export interface Error {
  message: string;
  field?: string;
}

export type AError = Error[] | any;
