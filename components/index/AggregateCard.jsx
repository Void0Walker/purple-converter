import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "#273c75",
    padding: 8,
    marginTop: 10,
    maxWidth: 300,
  },
  title: {
    padding: 4,
    fontSize: 14,
    color: "white",
    letterSpacing: 2,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AggregateCard({ aggregate }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Total amount converted 💲:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "#00ceff" }}>
          <b>
            {aggregate.TotalAmountUSD.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Total conversions 🔄:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "#00ceff" }}>
          <b>{aggregate.TotalConversions}</b>
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Last conversion ⌚:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "#00ceff" }}>
          {/* <b>{new Date(aggregate.updatedAt).toLocaleTimeString("cs-CS")}</b> */}
          <b>{aggregate.updatedAt}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}
