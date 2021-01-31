import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // background: "#00ceff",
    backgroundImage: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",

    padding: 8,
    marginTop: 10,
    marginBottom: 24,
    maxWidth: 300,
  },
  title: {
    padding: 4,
    fontSize: 14,
    color: "white",
    letterSpacing: 2,
  },
  purpleBackgroundGradient: {
    // backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    backgroundImage: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
  },
});

export default function ResultCard({ result }) {
  const classes = useStyles();

  return result ? (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Source Amount:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "white" }}>
          <b>
            {result.SourceAmount} {result.SourceCurrency.CurrencyISO}
          </b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Target amount:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "white" }}>
          <b>
            {result.TargetAmount} {result.TargetCurrency.CurrencyISO}
          </b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Conversion rate:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "white" }}>
          <b>{result.ConversionRate}</b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Converted at:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "white" }}>
          {result.createdAt}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    ""
  );
}
