import React from "react";
import { TextField, Grid } from "@material-ui/core";

export default function NameLastname(props) {
  const handleChange = (event) => {
    props.onChangeNameLastname(event.target.value);
  };

  return (
    <Grid container item justify="center" xs={12}>
      <form noValidate autoComplete="off">
        <TextField
          style={{ paddingTop: "8px" }}
          className="input"
          id="namelastname"
          value={props.nameLastname}
          onChange={handleChange}
          label={"Meno a Priezvisko"}
        />
      </form>
    </Grid>
  );
}
