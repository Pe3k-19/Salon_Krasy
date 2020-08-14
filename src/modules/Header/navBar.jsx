import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../services/services";
import News from "../news/news";
import Gallery from "../gallery/Gallery";
import OpenHours from "../openHours/OpenHours";
import Sponsors from "../sponsors/sponsors";
import OrderForm from "../orders/OrderForm";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const color = "#18262880";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: color,
    borderRadius: "5px",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Novinky" href="/drafts" {...a11yProps(0)} />

          <LinkTab label="Služby" href="/trash" {...a11yProps(1)} />

          <LinkTab label="Otváracie hodiny" href="/drafts" {...a11yProps(2)} />

          <LinkTab label="Objednaj sa" href="/trash" {...a11yProps(3)} />

          <LinkTab label="Galéria" href="/trash" {...a11yProps(4)} />

          <LinkTab label="Sponzori" href="/trash" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <News />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Services />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OpenHours />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OrderForm />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Gallery />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Sponsors />
      </TabPanel>
    </div>
  );
}
