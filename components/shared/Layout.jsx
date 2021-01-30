import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";
import Head from "next/head";
import { Container, makeStyles } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Purple converter</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <nav>
        <AppBar />
      </nav>
      <main>
        <Container>{children}</Container>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
}
