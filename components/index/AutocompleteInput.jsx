import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  option: {
    fontSize: "1rem",
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

export default function CountrySelect({
  currencies,
  variant,
  error,
  onAutoCompleteSourceChange,
  onAutoCompleteTargetChange,
}) {
  const inputVariant = variants[variant];
  const classes = useStyles();

  return (
    <Paper style={{ padding: 24 }}>
      <Autocomplete
        id={inputVariant.id}
        // style={{ width: 300 }}
        options={currencies}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        onChange={(event, newValue) =>
          variant === "source"
            ? onAutoCompleteSourceChange(event, newValue)
            : onAutoCompleteTargetChange(event, newValue)
        }
        getOptionLabel={(option) => option.CurrencyISO}
        renderOption={(option) => (
          <React.Fragment>
            <Typography
              style={{
                color: "#273c75",
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
              error={error[variant].error}
              helperText={
                error[variant].helperText
                  ? error[variant].helperText
                  : "required field *"
              }
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
