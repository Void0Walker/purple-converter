import React from "react";
import ConversionForm from "../components/index/ConversionForm";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3%",
  },
}));

export default function Home({ currencies, apiUrl }) {
  const [aggregate, setAggregate] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setTimeout(async () => {
        let resp = await fetch(`${apiUrl}/aggregate`);
        resp = await resp.json();
        if (resp.aggregate) {
          resp = resp.aggregate[0];
        } else {
          resp = null;
        }
        setAggregate(resp);
      }, 500);
    })();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  console.log(refresh, aggregate);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ConversionForm
        currencies={currencies}
        aggregate={aggregate}
        apiUrl={apiUrl}
        handleRefresh={handleRefresh}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const page = "/";
  const apiUrl = process.env.API_URL;

  let currencies = await fetch(`${process.env.API_URL}/currencies`);
  currencies = await currencies.json();

  if (currencies) {
    currencies = currencies.currencies;
  }

  return {
    props: { page, currencies, apiUrl },
  };
}
