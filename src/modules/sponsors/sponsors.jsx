import React from "react";
import Grid from "@material-ui/core/Grid";
import sponsorsImg from "../../image/sponsorsImg";

export default function Sponsors() {
  return (
    <div className="novinky">
      <Grid container>
        <Grid container item justify="center" spacing={5}>
          {sponsorsImg.map((obr) => (
            <Grid item key={obr.title}>
              <img
                src={obr.img}
                alt={obr.title}
                width="250px"
                height="100px"
              ></img>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
