import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import AutocompleteInput from "./AutocompleteInput";
import ConversionResult from "./ConversionResult";

const useStyles = makeStyles((theme) => ({
  purpleBackground: {
    backgroundImage:
      "linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)",
  },
}));

export default function AddConvertionForm({ currencies, aggregate }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={4}>
        <AutocompleteInput currencies={currencies} variant={"source"} />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <AutocompleteInput currencies={currencies} variant={"source"} />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <AutocompleteInput currencies={currencies} variant={"target"} />
      </Grid>
      <Grid item xs={12}>
        <ConversionResult aggregate={aggregate} />
      </Grid>
    </Grid>
  );
}
