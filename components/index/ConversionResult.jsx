import React from "react";
import { Paper, makeStyles, Typography, Grid } from "@material-ui/core";
import AggregateCard from "./AggregateCard";
import ResultCard from "./ResultCard";
const useStyles = makeStyles((theme) => ({
  purpleTitle: {
    marginTop: 10,
    letterSpacing: 3,
    padding: 8,
    textAlign: "center",
  },
  purpleResult: {
    padding: 24,
  },
  purpleAggregateGrid: {
    borderLeft: "1px solid black",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "hidden",
      borderTop: "1px solid black",
    },
  },
}));

function ConversionResult({ aggregate, result }) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.purpleResult} elevation={2}>
        <Grid container align="center" justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={6}>
            <Typography className={classes.purpleTitle}>
              <b>CONVERSION RESULT:</b>
            </Typography>
            <ResultCard result={result} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className={classes.purpleAggregateGrid}
          >
            <Typography className={classes.purpleTitle}>
              <b>AGGREGATE CONVERSION DATA:</b>
            </Typography>
            <AggregateCard aggregate={aggregate} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ConversionResult;
