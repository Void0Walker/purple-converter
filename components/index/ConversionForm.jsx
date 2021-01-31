import React from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import AutocompleteInput from "./AutocompleteInput";
import ConversionResult from "./ConversionResult";
import AmountInput from "./AmountInput";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const useStyles = makeStyles((theme) => ({
  purpleBackground: {
    // backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    backgroundImage: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
  },
}));

export default function AddConvertionForm({ currencies, aggregate, apiUrl }) {
  console.log(apiUrl);
  const classes = useStyles();
  const [amount, setAmount] = React.useState(null);
  const [source, setSource] = React.useState(null);
  const [target, setTarget] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState({
    source: { error: false, helperText: null },
    target: { error: false, helperText: null },
    amount: { error: false, helperText: null },
  });

  const onClickConvert = (event) => {
    event.preventDefault();
    if (amount && source && target) {
      fetch(`${apiUrl}/conversions`, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          SourceAmount: amount,
          SourceCurrency: { id: source._id, ISO: source.CurrencyISO },
          TargetCurrency: { id: target._id, ISO: target.CurrencyISO },
        }),
      }).then((resp) => {
        resp.json().then((apiResponse) => {
          setResult({
            ...apiResponse.conversionSave,
            SourceCurrency: source,
            TargetCurrency: target,
          });
        });
      });
    } else {
      //if fields missing - throw UI errors

      let newError = {};
      if (!amount) {
        newError = {
          ...error,
          amount: {
            error: true,
            helperText: "Amount cannot be 0 or negative number",
          },
        };
      }

      if (!source) {
        newError = {
          ...error,
          ...newError,
          source: { error: true, helperText: "Source currency cannot be null" },
        };
      }

      if (!target) {
        newError = {
          ...error,
          ...newError,
          target: { error: true, helperText: "Target currency cannot be null" },
        };
      }

      setError(newError);
    }
  };

  const onAmountChange = (event) => {
    event.preventDefault();
    setAmount(event.target.value);

    if (event.target.value && event.target.value > 0) {
      setError({ ...error, amount: { error: false, helperText: null } });
    } else {
      setError({
        ...error,
        amount: {
          error: true,
          helperText: "Amount cannot be 0 or negative number",
        },
      });
    }
  };

  const onAutoCompleteSourceChange = (event, value) => {
    event.preventDefault();
    setSource(value);

    if (value) {
      setError({ ...error, source: { error: false, helperText: null } });
    } else {
      setError({
        ...error,
        source: { error: true, helperText: "Source currency cannot be null" },
      });
    }
  };

  const onAutoCompleteTargetChange = (event, value) => {
    event.preventDefault();
    setTarget(value);

    if (value) {
      setError({ ...error, target: { error: false, helperText: null } });
    } else {
      setError({
        ...error,
        target: { error: true, helperText: "Target currency cannot be null" },
      });
    }
  };

  console.log(source, target, amount);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={2}>
        <AmountInput
          amount={amount}
          error={error}
          onAmountChange={onAmountChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <AutocompleteInput
          currencies={currencies}
          variant={"source"}
          source={source}
          error={error}
          onAutoCompleteSourceChange={onAutoCompleteSourceChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <AutocompleteInput
          currencies={currencies}
          variant={"target"}
          target={target}
          error={error}
          onAutoCompleteTargetChange={onAutoCompleteTargetChange}
        />
      </Grid>
      <Grid item item xs={12} sm={12} md={2}>
        <Paper
          style={{ padding: 24, textAlign: "center" }}
          className={classes.purpleBackground}
        >
          <Typography
            style={{
              fontSize: "1.7rem",
              letterSpacing: 3,
              color: "white",
            }}
          >
            <b>CONVERT</b>
          </Typography>
          <IconButton
            aria-label="delete"
            style={{ margin: 10, color: "white" }}
            onClick={onClickConvert}
          >
            <AutorenewIcon fontSize="large" />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <ConversionResult aggregate={aggregate} result={result} />
      </Grid>
    </Grid>
  );
}
