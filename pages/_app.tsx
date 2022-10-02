import "../styles/globals.css";
import "../styles/header.css";
import "../styles/carousel.css";
import "../styles/intro.css";
import "../styles/products.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
