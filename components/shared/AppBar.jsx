import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  purpleAppBar: {
    background: "#522473",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing: 4,
  },
  purpleAuthor: {
    letterSpacing: 4,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.purpleAppBar} elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
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
