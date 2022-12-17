import CustomNavBar from '../../containers/CustomNavBar';
import CustomFooter from '../../containers/CustomFooter';
import React, { memo } from 'react';
import Head from 'next/head';

interface DefaultProps {
  children: JSX.Element | JSX.Element[]
}

const DefaultLayout = ({children}: DefaultProps)=>{
  return (
    <>
      <Head>
        <title>Observatorio de jovenes en Peru</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta name="description" content="Observatorio de jovenes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavBar />
        {children}
      <CustomFooter />
    </>
  )
}

export default memo(DefaultLayout)