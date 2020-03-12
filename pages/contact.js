import Head from "next/head";
import Link from "next/link";

const Home = () => (
  <div className="container">
    <Head>
      <title>Contact</title>
      <link rel="icon" href="/favicon.ico" />
      <script
        async
        defer
        src="https://cdn.simpleanalytics.io/hello.js"
      ></script>
      <noscript>
        <img src="https://api.simpleanalytics.io/hello.gif" />
      </noscript>
    </Head>

    <main>
      <h1 className="title">Contact</h1>
      <p>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </p>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
        color: red;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
