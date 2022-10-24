import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link rel="icon" href="/blue_circle.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Nunito:ital,wght@1,300&family=Press+Start+2P&family=Public+Sans:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
