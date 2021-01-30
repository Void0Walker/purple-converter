import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "#273c75",
    padding: 8,
    marginTop: 10,
    maxWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    padding: 4,
    fontSize: 14,
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ aggregate }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
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
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Total conversions 🔄:
        </Typography>
        <Typography variant="h5" component="h2" style={{ color: "#00ceff" }}>
          <b>{aggregate.TotalConversions}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}
