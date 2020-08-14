import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

export default function CustomizedTables(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200,
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
  makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const classes = useStyles();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Meno a Priezvisko</StyledTableCell>
            <StyledTableCell style={{ paddingLeft: "30px" }} align="left">
              Dátum
            </StyledTableCell>
            <StyledTableCell align="center">Čas</StyledTableCell>
            <StyledTableCell align="right">Služba</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.newDatabase.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="left">{data.date}</StyledTableCell>
              <StyledTableCell align="center">{data.time}</StyledTableCell>
              <StyledTableCell align="right">{data.service}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
