import React from "react";

export default class TimeDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    let day = this.state.date.getDate();
    let month = this.state.date.getMonth() + 1;
    let year = this.state.date.getFullYear();
    let newDate = "";
    if (day < 10) {
      day = "0" + day;
    } else {
    }
    if (month < 10) {
      month = "0" + month;
    } else {
    }
    newDate = day + "." + month + "." + year;
    return <div> {newDate}</div>;
  }
}
