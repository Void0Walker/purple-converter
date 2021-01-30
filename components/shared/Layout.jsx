import React from "react";
import AppBar from "../shared/AppBar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <nav>
        <AppBar />
      </nav>
      <main>{children}</main>
    </>
  );
}
