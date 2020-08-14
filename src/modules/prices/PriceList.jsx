import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import serviceList from "../../ServiceList";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 22,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

export default function PriceList() {
  const classes = useStyles();
  return (
    <div className="novinky">
      <div className="priceList-table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Názov služby</StyledTableCell>
                <StyledTableCell align="right">Cena</StyledTableCell>
                <StyledTableCell align="right">Trvanie</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviceList.map((list) => (
                <StyledTableRow key={list.name}>
                  <StyledTableCell component="th" scope="row">
                    {list.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{list.price}</StyledTableCell>
                  <StyledTableCell align="right">{list.time}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="priceListBody">
        {serviceList.map((list) => (
          <div key={list.name}>
            <h2 className="style1">{list.name}</h2>
            <h4 className="style2">{list.content}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
