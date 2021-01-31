import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "00ceff",
    padding: 8,
    marginTop: 10,
    marginBottom: 24,
    maxWidth: 300,
  },
  title: {
    padding: 4,
    fontSize: 14,
    color: "black",
    letterSpacing: 2,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ResultCard({ result }) {
  const classes = useStyles();

  //   conversionSave:
  // ConversionRate: 1
  // SourceAmount: 1
  // SourceCurrency: "6015607a33b4e444dc9b59b9"
  // TargetAmount: 1
  // TargetCurrency: "6015607a33b4e444dc9b59b9"
  // createdAt: "2021-01-31T12:20:21.787Z"
  // updatedAt: "2021-01-31T12:20:21.787Z"
  // __v: 0
  // _id: "6016a0851dfa7565b80bb79e"

  return result ? (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Source Amount:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "black" }}>
          <b>
            {result.SourceAmount} {result.SourceCurrency.CurrencyISO}
          </b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Target amount:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "black" }}>
          <b>
            {result.TargetAmount} {result.TargetCurrency.CurrencyISO}
          </b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Conversion rate:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "black" }}>
          <b>{result.ConversionRate}</b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Converted at:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "black" }}>
          {result.createdAt}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    ""
  );
}
