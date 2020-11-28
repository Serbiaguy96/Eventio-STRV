import { IconButton, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { APP_COLORS } from "../../../providers/ConnectedThemeProvider/ConnectedThemeProvider";

export const CssTextField = withStyles({
  root: {
    width: "100%",
    margin: "10px 0",
    "& label": {
      fontSize: "18px",
      fontFamily: "Hind",
      color: APP_COLORS.lighterGray,
    },
    "& label.Mui-error": {
      color: APP_COLORS.lighterGray,
    },
    "& label.MuiInputLabel-shrink": {
      fontSize: "14px",
      fontFamily: "Hind",
      lineHeight: "24px",
    },
    "& label.Mui-focused": {
      color: APP_COLORS.lighterGray,
      fontSize: "14px",
      fontFamily: "Hind",
      lineHeight: "24px",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: APP_COLORS.errorRed,
    },
    "& .MuiInput-underline:before": {
      borderBottom: `1px solid ${APP_COLORS.lighterGray}`,
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: `1px solid ${APP_COLORS.lighterGray}`,
    },
    "& .MuiInput-underline:after": {
      borderBottom: `1px solid ${APP_COLORS.darkGray}`,
    },
    "& p.MuiFormHelperText-root.Mui-error": {
      color: APP_COLORS.errorRed,
    },
  },
})(TextField);

export const CssIconButton = withStyles({
  root: {
    color: APP_COLORS.lighterGray,
    "&:hover": {
      background: "transparent",
    },
  },
})(IconButton);
