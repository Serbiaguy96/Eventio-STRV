import { Control } from "react-hook-form";

export interface FormHookInputTypes {
  name: string;
  control: Control;
  error: boolean;
  required: string | boolean;
  helperText: string | undefined;
}
