export interface DefaultButtonProps {
  label: string;
  action: () => void;
  textColor?: string;
  bgColor: string;
}

export type CustomButtonProps = Omit<
  DefaultButtonProps,
  "textColor" | "bgColor"
>;
