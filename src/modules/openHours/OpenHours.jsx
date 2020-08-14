import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableHead: {
    backgroundColor: "#18262880",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
  tableBodyBg: {
    backgroundColor: "red",
  },
  tableBodyTxt: {
    fontWeight: "bold",
    fontSize: "15px",
    borderRadius: "5px",
  },
});

export default function OpenHours() {
  const [day] = useState(new Date().getDay());
  const [hours] = useState(new Date().getHours());

  function createData(day, openFrom, openTo) {
    return { day, openFrom, openTo };
  }

  const rows = [
    createData("Pondelok", "07:00", "17:00"),
    createData("Utorok", "07:00", "17:00"),
    createData("Streda", "07:00", "17:00"),
    createData("Štvrtok", "07:00", "17:00"),
    createData("Piatok", "07:00", "17:00"),
    createData("Sobota", "Na objednávku", "Na objednávku"),
    createData("Nedeľa", "Zatvorené", "Zatvorené"),
  ];
  const classes = useStyles();
  let openClose = "";
  let color = "";
  if (day > 0 && day < 6 && hours > 6 && hours < 17) {
    openClose = "Otvorené";
    color = "green";
  } else {
    openClose = "Zatvorené";
    color = "red";
  }

  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      className="novinky"
      style={{
        color: "#f2f2f2",
        width: "100%",
      }}
    >
      <Grid item xs={12} style={{ paddingBottom: "20px" }}>
        <h1>
          Prave teraz je:{" "}
          <div style={{ color: color, display: "inline" }}>{openClose}</div>
        </h1>
      </Grid>
      <Grid container item xs={10}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableHead}>
                  Deň v týždni
                </TableCell>
                <TableCell className={classes.tableHead} align="center">
                  Otvorené od
                </TableCell>
                <TableCell className={classes.tableHead} align="right">
                  Otvorené do
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.day}>
                  <TableCell
                    className={classes.tableBodyTxt}
                    component="th"
                    scope="row"
                  >
                    {row.day}
                  </TableCell>
                  <TableCell className={classes.tableBodyTxt} align="center">
                    {row.openFrom}
                  </TableCell>
                  <TableCell className={classes.tableBodyTxt} align="right">
                    {row.openTo}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container justify="center" item xs>
        <Grid item style={{ textAlign: "center", paddingTop: "20px" }}>
          <h3>
            V štátne a cirkevné sviatky sa otváracie hodiny môžu líšiť.
            <p />
            Ďakujem za pochopenie.
          </h3>
        </Grid>
      </Grid>
    </Grid>
  );
}
