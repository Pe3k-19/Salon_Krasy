import React, { useState } from "react";
import SetDateTime from "./FormSetTime";
import NameLastname from "./NameLastname";
import PhoneNumber from "./PhoneNumber";
import SelectService from "./SelectService";
import CustomizedTables from "./CustomizedTables";
import Grid from "@material-ui/core/Grid";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  filledError: {
    justifyContent: "center",
  },
}));

export default function OrderForm() {
  //state
  const [service, setService] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [nameLastname, setNameLastname] = React.useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newTime, setNewTime] = useState();
  const [newDate, setNewDate] = useState();
  const [completedForm, setCompletedForm] = useState("");
  const [stateForm, setStateForm] = useState("");
  const [open, setOpen] = React.useState(false);
  const [newDatabase, setNewDatabase] = useState([
    {
      id: 1,
      name: "Janko Malý",
      date: "17.02.2020",
      time: "09:20",
      service: "Čistenie pleti",
      phone: "+421 903 030 049",
    },
    {
      id: 2,
      name: "Anička Borovicová",
      date: "18.02.2020",
      time: "10:10",
      service: "MakeUp",
      phone: "+421 433 037 047",
    },
    {
      id: 3,
      name: "Jožka Bíla",
      date: "18.02.2020",
      time: "14:30",
      service: "4D Mihalnice",
      phone: "+421 912 444 045",
    },
    {
      id: 4,
      name: "Andrea Majkutová",
      date: "19.02.2020",
      time: "09:40",
      service: "Líčenie",
      phone: "+421 983 636 088",
    },
    {
      id: 5,
      name: "Monika Pribilinová",
      date: "19.02.2020",
      time: "12:10",
      service: "Úprava obočia",
      phone: "+421 988 675 345",
    },
  ]);

  const classes = useStyles();

  const reset = () => {
    setNameLastname("");
    setPhoneNumber("");
    setSelectedDate(new Date());
    setService("");
  };

  const handleChangeService = (data) => {
    setService(data);
  };

  const handleChangePhoneNumber = (data) => {
    setPhoneNumber(data);
  };

  const handleChangeNameLastname = (data) => {
    setNameLastname(data);
  };

  const handleChangeTime = (data) => {
    setSelectedDate(data);
  };

  const handleChangeNewTime = (data) => {
    setNewTime(data);
  };

  const handleChangeNewDate = (data) => {
    setNewDate(data);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function Post() {
    if (nameLastname === "") {
      setCompletedForm("Zadajte meno!");
      setStateForm("error");
    } else if (phoneNumber.length === 0) {
      setCompletedForm("Zadajte číslo!");
      setStateForm("error");
    } else if (phoneNumber.length !== 10) {
      setCompletedForm("Zadali ste zlé číslo!");
      setStateForm("error");
    } else if (service === "") {
      setCompletedForm("Zadajte službu");
      setStateForm("error");
    } else {
      setCompletedForm("Objednávka je dokončena. Ďakujeme!");
      setStateForm("success");
      addPerson();
      setTimeout(() => {
        handleClose();
      }, 5000);
      reset();
    }
    handleClick();
  }

  function addPerson() {
    let newArray = [...newDatabase];
    newArray.push({
      id: Math.random(6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16),
      name: nameLastname,
      date: newDate,
      time: newTime,
      login: "test",
      service: service,
      phone: phoneNumber,
    });

    setNewDatabase(newArray);
  }
  function Alert(props) {
    return (
      <MuiAlert
        className={classes.filledError}
        elevation={6}
        variant="filled"
        {...props}
      />
    );
  }
  const snackbar = () => {
    if (open) {
      return (
        <Grid
          item
          xs={12}
          style={{ paddingTop: "10px", paddingBottom: "20px" }}
        >
          <Alert severity={stateForm}>{completedForm}</Alert>
        </Grid>
      );
    }
  };

  return (
    <Grid container className="novinky">
      <Grid container item xs={12} style={{ paddingBottom: "20px" }}>
        <Grid item xs={6}>
          <NameLastname
            nameLastname={nameLastname}
            onChangeNameLastname={handleChangeNameLastname}
          />
        </Grid>
        <Grid item xs={6}>
          <PhoneNumber
            phoneNumber={phoneNumber}
            onChangePhoneNumber={handleChangePhoneNumber}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <SetDateTime
            selectedDate={selectedDate}
            onChangeTime={handleChangeTime}
            onChangeNewTime={handleChangeNewTime}
            onChangeNewDate={handleChangeNewDate}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectService
            service={service}
            onPost={Post}
            onChangeService={handleChangeService}
          />
        </Grid>
      </Grid>
      {snackbar()}
      <CustomizedTables
        nameLastname={nameLastname}
        phoneNumber={phoneNumber}
        newTime={newTime}
        newDate={newDate}
        service={service}
        newDatabase={newDatabase}
      />
    </Grid>
  );
}
