import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    backgroundImage: "linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)",
    padding: 8,
    marginTop: 10,
    maxWidth: 300,
  },
  title: {
    padding: 4,
    fontSize: 14,
    color: "black",
    letterSpacing: 2,
  },
});

export default function AggregateCard({ aggregate }) {
  const classes = useStyles();
  return aggregate ? (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Total amount converted:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "#522473" }}>
          <b>
            {aggregate.TotalAmountUSD.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Total conversions:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "#522473" }}>
          <b>{aggregate.TotalConversions}</b>
        </Typography>
        {aggregate.MostPopularCurrency ? (
          <>
            <Typography className={classes.title} color="textSecondary">
              Most popular currency:
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              style={{ color: "#522473" }}
            >
              <b>{aggregate.MostPopularCurrency}</b>
            </Typography>
          </>
        ) : (
          ""
        )}
      </CardContent>
    </Card>
  ) : (
    <Typography>Loading ... </Typography>
  );
}
