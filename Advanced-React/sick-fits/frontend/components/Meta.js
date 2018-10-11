import Head from "next/head";

const Meta = () => (
  <Head>
    {/* Allows us to have responsive design  */}
    <meta name="viewport" content="width=device-width" initial-scale="1" />
    {/* Character encoding */}
    <meta charSet="utf-8" />
    {/* Favicon */}
    <link rel="shortcut icon" href="/static/favicon.png" />
    {/* Loading bar */}
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    {/* Default title that is overwrote occasionally */}
    <title>Sick Fits!</title>
  </Head>
);

export default Meta;
