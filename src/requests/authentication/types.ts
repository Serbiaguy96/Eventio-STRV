export interface RefreshTokenReturnType {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignInFormType {
  email: string;
  password: string;
}
