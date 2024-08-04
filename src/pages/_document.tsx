import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <title>Harry McDonagh</title>
      </head>
      <Head />
      <body id="root" className="bg-zinc-900 text-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
