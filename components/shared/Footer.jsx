import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    borderTop: "3px solid black",
    display: "flex",
    background: "#00CEFF",
    padding: 4,
    justifyContent: "space-between",
    marginTop: 50,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerRoot}>
      <Typography variant="h5" style={{ padding: 8, color: "white" }}>
        @2021
      </Typography>
    </div>
  );
}
