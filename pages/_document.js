import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Simple Analytics script */}
          <script async src={`https://cdn.simpleanalytics.io/hello.js`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
