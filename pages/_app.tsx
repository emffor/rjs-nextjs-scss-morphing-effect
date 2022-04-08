import type { AppProps } from 'next/app'

import "../styles/global.scss";
import { MorphingEffect } from './MorphingEffect';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <MorphingEffect />
    </>
  ) 
}

export default MyApp
