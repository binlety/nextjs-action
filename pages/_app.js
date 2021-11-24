import Head from 'next/head';
import '../globals.css'
import 'rsuite/lib/styles/index.less';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next找家纺</title>
        <meta name="description" content="找家纺 找家纺就上找家纺网" />
        <link rel="icon" href="/favicon.png" />
      </Head>
     <Component {...pageProps} />
   </>
  )  
}

export default MyApp
