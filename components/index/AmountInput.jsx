import React from "react";
import { Paper, Typography, TextField } from "@material-ui/core";

export default function SimpleInput({ amount, error, onAmountChange }) {
  return (
    <Paper style={{ padding: 24 }}>
      <Typography style={{ letterSpacing: 3, padding: 8 }}>
        <b>Amount</b>
      </Typography>
      <TextField
        id="filled-amount"
        label="Amount"
        type="number"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onAmountChange}
        error={error.amount.error}
        variant="filled"
        helperText={
          error.amount.helperText ? error.amount.helperText : "required field *"
        }
      />
    </Paper>
  );
}
