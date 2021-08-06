import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import '../styles/list.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import config from '../config';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>{config.fullName}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
