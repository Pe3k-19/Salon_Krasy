import React from "react";
import Grid from "@material-ui/core/Grid";

export default class Footer extends React.Component {
  render() {
    const footerImage = require("../../image/gal6.jpg");
    return (
      <Grid container className="footer" style={{ color: "#f2f2f2" }}>
        <Grid container item xs={4}>
          <Grid container item justify="center" style={{ paddingTop: "20px" }}>
            <Grid item>
              <div className="pic3"></div>
            </Grid>
            <Grid item>
              <b>Majiteľ / Majiteľka:</b>
              <p />
              Monika Mala
              <p />
              monika.mala@gmail.com
              <p />
              +421909450294
            </Grid>
          </Grid>
          <Grid
            container
            item
            justify="center"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <Grid item>
              <div className="pic4"></div>
            </Grid>
            <Grid item>
              <b>Kozmetička:</b>
              <p />
              Marika Biela
              <p />
              marika.biela@gmail.com
              <p />
              +421904039400
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <Grid container item justify="center" style={{ paddingTop: "20px" }}>
            <Grid item>
              <div className="pic5"></div>
            </Grid>
            <Grid item>
              {" "}
              <b>Kozmetička:</b>
              <p />
              Marina Ignacova
              <p />
              m.ignacova@gmail.com
              <p />
              +421933493869
            </Grid>
          </Grid>
          <Grid
            container
            item
            justify="center"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <Grid item>
              <div className="pic6"></div>
            </Grid>
            <Grid item>
              <b>Kozmetička:</b>
              <p />
              Marina Ignacova
              <p />
              m.ignacova@gmail.com
              <p />
              +421933493869
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={4} justify="center">
          <Grid item xs={5}>
            <img src={footerImage} height="100%" alt="gal6"></img>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
