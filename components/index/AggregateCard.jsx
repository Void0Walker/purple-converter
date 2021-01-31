import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    backgroundImage: "linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)",
    // background: "#273c75",
    padding: 8,
    marginTop: 10,
    maxWidth: 300,
    // textAlign: "center",
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
              Most popular target currency:
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
        <Typography className={classes.title} color="textSecondary">
          Last conversion:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "#522473" }}>
          {/* <b>{new Date(aggregate.updatedAt).toLocaleTimeString("cs-CS")}</b> */}
          <b>{aggregate.updatedAt}</b>
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Typography>No data </Typography>
  );
}
