import { createMuiTheme, IconButton, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { APP_COLORS } from "../../../providers/ConnectedThemeProvider/ConnectedThemeProvider";
import { DatePicker, TimePicker } from "@material-ui/pickers";

const EventionInputCss = {
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
};

export const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: APP_COLORS.darkGray,
      },
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: APP_COLORS.lightGreen,
      },
      thumb: {
        backgroundColor: APP_COLORS.lighterGray,
        borderColor: APP_COLORS.lightGreen,
      },
    },
    MuiPickersClock: {
      pin: {
        backgroundColor: APP_COLORS.lightGreen,
      },
    },
    MuiPickersDay: {
      day: {
        color: APP_COLORS.darkGray,
      },
      daySelected: {
        backgroundColor: APP_COLORS.lightGreen,
      },
      dayDisabled: {
        color: APP_COLORS.lighterGray,
      },
      current: {
        color: APP_COLORS.darkGray,
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: APP_COLORS.darkGray,
      },
    },
    MuiTouchRipple: {
      root: {
        color: `${APP_COLORS.darkGray}`,
      },
    },
    MuiButton: {
      textPrimary: {
        color: `${APP_COLORS.darkGray}`,
      },
    },
  },
});

export const CssDateField = withStyles(EventionInputCss)(DatePicker);

export const CssTextField = withStyles(EventionInputCss)(TextField);

export const CssTimeField = withStyles(EventionInputCss)(TimePicker);

export const CssIconButton = withStyles({
  root: {
    color: APP_COLORS.lighterGray,
    "&:hover": {
      background: "transparent",
    },
  },
})(IconButton);
