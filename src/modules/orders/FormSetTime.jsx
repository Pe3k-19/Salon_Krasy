import React from "react";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
  root: {
    color: grey,
  },
});

export default function SetDateTime(props) {
  function getTime() {
    let hou = props.selectedDate.getHours();
    let min = props.selectedDate.getMinutes();
    if (hou < 10) {
      hou = "0" + hou;
    } else {
    }
    if (min < 10) {
      min = "0" + min;
    } else {
    }
    return hou + ":" + min;
  }
  props.onChangeNewTime(getTime);

  function getdate() {
    let day = props.selectedDate.getDate();
    let month = props.selectedDate.getMonth() + 1;
    let year = props.selectedDate.getFullYear();
    if (day < 10) {
      day = "0" + day;
    } else {
    }
    if (month < 10) {
      month = "0" + month;
    } else {
    }
    return day + "." + month + "." + year;
  }
  props.onChangeNewDate(getdate);
  const classes = createMuiTheme();
  return (
    <Grid container item justify="center" xs={12}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes}>
          <KeyboardDateTimePicker
            style={{ paddingTop: "8px" }}
            variant="inline"
            ampm={false}
            label={<h6>Čas a dátum:</h6>}
            onChange={props.onChangeTime}
            value={props.selectedDate}
            disablePast
            format="dd.MM.yyyy HH:mm"
            minDate={new Date().toLocaleDateString}
            minutesStep={5}
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Grid>
  );
}
