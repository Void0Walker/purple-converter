import React from "react";
import ConversionForm from "../components/index/ConversionForm";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2%",
  },
}));

export default function Home({ currencies, aggregate }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ConversionForm currencies={currencies} aggregate={aggregate} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const pageTitle = "Home | Synetech-demo";
  const page = "/";
  const apiUrl = process.env.API_URL;

  console.log(apiUrl);

  let [currencies, aggregate] = await Promise.all([
    fetch(`${process.env.API_URL}/currencies`),
    fetch(`${process.env.API_URL}/aggregate`),
  ]);

  [currencies, aggregate] = await Promise.all([
    currencies.json(),
    aggregate.json(),
  ]);

  currencies = currencies.currencies;
  aggregate = aggregate.aggregate[0];

  return {
    props: { page, currencies, pageTitle, aggregate },
  };
}
