import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Profile.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ArticleByPerson() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "none",
          margin: "auto",
          display: "flex",
          justifyContent: "space-beetwen"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} style={{ color: "#000000" }} />
          <Tab label="Claps" {...a11yProps(1)} style={{ color: "#000000" }} />
          <Tab
            label="Highlight"
            {...a11yProps(1)}
            style={{ color: "#000000" }}
          />
          <Tab
            label="Response"
            {...a11yProps(2)}
            style={{ color: "#000000" }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <p className="Article-by-person-title">Claps from Amin Subagiyo</p>
        <ul className="profile">
          <li>
            <p>Top 10 Elon Musk Productivity Secrets for Insane Success</p>
            <p className="undertitle">Dan Silvestre</p>
          </li>
          <hr></hr>
          <li>
            <p>Psychologists Explain How To Stop Overthinking Everything</p>
            <p className="undertitle">Thomas Oppong</p>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="Article-by-person-title">Claps</p>
        <ul className="claps">
          <li>
            <div className="claps-title">
              Top 10 Elon Musk Productivity Secrets for Insane Success
            </div>
            <img src="https://miro.medium.com/max/361/1*JmEUqbxA9nA3pr1yMwloOg.jpeg"></img>
          </li>
          <li>
            <img src="https://miro.medium.com/fit/c/700/210/1*PwZsd2suQER-gRfM0g5w0w.png"></img>
            <div className="claps-title">
              Psychologists Explain How To Stop Overthinking Everything
            </div>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
