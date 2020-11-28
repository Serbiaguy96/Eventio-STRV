export type DefaultButtonProps = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  action?: () => void;
  textColor?: string;
  bgColor: string;
  hoverColor: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export type CustomButtonProps = Omit<
  DefaultButtonProps,
  "type" | "bgColor" | "textColor" | "hoverColor"
>;
