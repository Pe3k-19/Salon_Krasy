import React from "react";
import Clock from "./Clock";
import TimeDate from "./Date";
import Grid from "@material-ui/core/Grid";

export default class Header extends React.Component {
  render() {
    let toDay = "";
    let day = new Date().getDay();
    if (day === 1) {
      toDay = "pondelok";
    } else if (day === 2) {
      toDay = "utorok";
    } else if (day === 3) {
      toDay = "streda";
    } else if (day === 4) {
      toDay = "štvrtok";
    } else if (day === 5) {
      toDay = "piatok";
    } else if (day === 6) {
      toDay = "sobota";
    } else if (day === 0) {
      toDay = "nedeľa";
    }
    return (
      <Grid container alignItems="center" className="header">
        <Grid container item xs={4} justify="center">
          {<TimeDate />}
        </Grid>
        <Grid container item xs={4} justify="center">
          {<Clock />}
        </Grid>
        <Grid container item xs={4} justify="center">
          Dnes je {toDay}
        </Grid>
      </Grid>
    );
  }
}
