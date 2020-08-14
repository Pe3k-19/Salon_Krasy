import React from "react";
import {
  MenuItem,
  FormControl,
  Button,
  InputLabel,
  Select,
  Grid,
} from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const prim = grey[800];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: prim,
    },
  },
});

export default function SelectService(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200,
        // fontWeight: "bold",
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

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    props.onChangeService(event.target.value);
  };

  return (
    <Grid container item justify="center" xs={12}>
      <ThemeProvider theme={theme}>
        <FormControl className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-helper-label">
            Služba
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={props.service}
            onChange={handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value={"Čistenie pleti"}>Čistenie pleti</MenuItem>
            <MenuItem value={"Líčenie"}>Líčenie</MenuItem>
            <MenuItem value={"MakeUp"}>MakeUp</MenuItem>
            <MenuItem value={"Úprava obočia"}>Úprava obočia</MenuItem>
            <MenuItem value={"3D Mihalnice"}>3D Mihalnice</MenuItem>
            <MenuItem value={"4D Mihalnice"}>4D Mihalnice</MenuItem>
            <MenuItem value={"5D Mihalnice"}>5D Mihalnice</MenuItem>
          </Select>
        </FormControl>
        <div style={{ float: "right" }}>
          <Button
            type="submit"
            variant="outlined"
            onClick={props.onPost}
            style={{
              color: "black",
              marginTop: "20px",
              marginLeft: "30px",
            }}
          >
            Poslať
          </Button>
        </div>
      </ThemeProvider>
    </Grid>
  );
}
