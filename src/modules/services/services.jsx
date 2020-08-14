import React from "react";
import serviceList from "../../image/ServiceList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid rgba(56, 50, 37, 0.61)",
    backgroundColor: "rgba(56, 50, 37, 0.61)",
    borderRadius: 10,
    color: "black",
    margin: 10,
    maxWidth: 400,
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <Grid container className="novinky" justify="center">
      {serviceList.map((list) => (
        <Grid
          container
          item
          justify="center"
          className={classes.root}
          key={list.name}
        >
          <Grid item>
            <img src={list.photo} alt="face4" className={classes.image} />
          </Grid>
          <Grid item>
            <h2>{list.name}</h2>
          </Grid>
          <Grid item>{list.content}</Grid>
        </Grid>
      ))}
    </Grid>
  );
}
