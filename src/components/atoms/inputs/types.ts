import { Control } from "react-hook-form";

export interface FormHookInputTypes {
  name: string;
  control: Control;
  error: boolean;
  required: string | boolean;
  label: string;
  helperText: string | undefined;
  defaultValue?: any;
  customRules?: any;
}
