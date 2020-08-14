import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function PhoneNumber(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200,
        fontWeight: "bold",
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const handleChange = (event) => {
    props.onChangePhoneNumber(event.target.value);
  };

  return (
    <Grid container item justify="center" xs={12}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="phonenumber"
          value={props.phoneNumber}
          onChange={handleChange}
          label={"Telefónne číslo"}
        />
      </form>
    </Grid>
  );
}
