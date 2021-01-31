import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  purpleAppBar: {
    background: "#522473",
  },
  root: {
    flexGrow: 1,
  },
  purpleTitle: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    flexGrow: 1,
    letterSpacing: 4,
  },
  purpleAuthor: {
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      textAlign: "right",
    },
    letterSpacing: 4,
    padding: 24,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.purpleAppBar} elevation={0}>
        <Toolbar>
          <Typography className={classes.purpleTitle}>
            <b>PURPLE</b> CONVERTER 📈
          </Typography>
          <Typography className={classes.purpleAuthor}>
            [ Artūras Kalandarišvili assignment ]
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
