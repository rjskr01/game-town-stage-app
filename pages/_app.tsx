// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import RootLayout from '../components/layout';
import '../styles/global.css'; // Import your global styles here
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Head>
        {/* Place your HTML and meta tags here */}
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Other meta tags, stylesheets, etc. */}
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default MyApp;