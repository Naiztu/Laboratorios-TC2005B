import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layaout({ children}) {
  return (
    <>
      <Head>
        <title>Laboratorios</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
