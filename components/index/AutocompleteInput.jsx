/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  option: {
    fontSize: "1rem",
    // "& > span": {
    //   marginRight: 10,
    //   fontSize: 18,
    // },
  },
});

const variants = {
  source: {
    id: "currency-select-source",
    label: "From",
    description: "Source currency",
  },
  target: {
    id: "currency-select-target",
    label: "To",
    description: "Target currency",
  },
};

export default function CountrySelect({ currencies, variant }) {
  const inputVariant = variants[variant];
  const classes = useStyles();

  return (
    <Paper style={{ padding: 24 }}>
      <Autocomplete
        id="country-select-demo"
        // style={{ width: 300 }}
        options={currencies}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.CurrencyISO}
        renderOption={(option) => (
          <React.Fragment>
            <Typography
              style={{
                color: "#546de5",
              }}
            >
              <b>{option.CurrencyISO}</b>
            </Typography>
            <Typography style={{ fontSize: "0.8rem" }}>
              &nbsp;{option.CurrencyDescription}
            </Typography>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <>
            <Typography style={{ letterSpacing: 3, padding: 8 }}>
              <b>{inputVariant.description}</b>
            </Typography>
            <TextField
              {...params}
              label={inputVariant.label}
              helperText="required field *"
              variant="filled"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          </>
        )}
      />
    </Paper>
  );
}
