export interface EventioError {
  message: string | null;
  error: string;
  stack: string | null;
}

export type AError = EventioError[] | any;
