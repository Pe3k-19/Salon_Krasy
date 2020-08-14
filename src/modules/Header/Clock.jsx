import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let newHours = "";
    let seconds = new Date().getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    } else {
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
    }
    newHours = hours + ":" + minutes + ":" + seconds;
    return <div>{newHours}</div>;
  }
}
