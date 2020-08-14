import { createMuiTheme } from "@material-ui/core/styles";

const blueDark = "#1A73E8";
const white = "#F1F1F1";
const snowWhite = "#FFFFFF";

export const muiTheme = createMuiTheme({
  palette: {
    primary: { main: "#1A73E8" },
    secondary: { main: "#39B0DD" },
    // error: { main: '#C6184E' },
    // warning: { main: '#FFB900' },
    // success: { main: '#00A787' },
    // default: { main: '#78849E' }
  },
  overrides: {
    MuiDialogContent: {
      root: {
        // backgroundColor: white,
        "& .fs-content": {
          borderRadius: "10px",
          margin: "0 auto",
          padding: "24px",
          width: "70%",
        },
        "& .fs-footer": {
          margin: "0 auto",
          padding: "24px",
          width: "70%",
        },
      },
    },
    MuiDialogTitle: {
      root: {
        // backgroundColor: blueDark,
        padding: "1px 0px 1px 2px",
        "& .fs-title": {
          color: snowWhite,
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        fontWeight: "400",
        fontSize: "0.8rem",
      },
    },
    MuiPickersBasePickerPickerView: {
      backgroundColor: "#384749ab",
    },

    MuiInputBaseInput: {
      color: "#f2f2f2",
    },
    MuiPickersCalendarHeaderDayLabel: {
      color: "#f2f2f2",
    },

    MuiPickersClockNumberClockNumber: {
      color: "#f2f2f2",
    },
    // MuiInput: {
    //   underline: {
    //     '&.error:before': {
    //       borderBottom: '1px solid red'
    //     }
    //   }
    // }
    // MuiButton: {
    //   root: {
    //     background: "red"
    //   }
    // }
  },
});

export default muiTheme;
