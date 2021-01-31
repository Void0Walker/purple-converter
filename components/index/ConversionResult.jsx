import React from "react";
import { Paper, makeStyles, Typography, Divider } from "@material-ui/core";
import AggregateCard from "./AggregateCard";
import ResultCard from "./ResultCard";
const useStyles = makeStyles((theme) => ({
  purpleTitle: {
    marginTop: 10,
    letterSpacing: 3,
    padding: 8,
  },
  purpleResult: {
    // background: "#522473",
    // borderRadius: 0,
    padding: 24,
    // backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    // backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
  },
}));

function ConversionResult({ aggregate, result }) {
  console.log(result);
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.purpleResult} elevation={2}>
        <Typography className={classes.purpleTitle}>
          Conversion result
        </Typography>
        <ResultCard result={result} />
        <Divider />
        <Typography className={classes.purpleTitle}>
          Aggregate convertion data
        </Typography>
        <AggregateCard aggregate={aggregate} />
      </Paper>
    </>
  );
}

export default ConversionResult;
