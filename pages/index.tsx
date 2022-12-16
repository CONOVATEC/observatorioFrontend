import Hero from '../src/containers/CustomHero';
import Head from 'next/head';
import CustomNavBar from '../src/containers/CustomNavBar';
import ResponsiveGalleryWithCarousel from '../src/views/ResponsiveGalleryWithCarousel';
import { useGetSponsorImagesQuery } from '../src/redux/sponsors/slice';
import { memo, useMemo } from 'react';
import styles from '../styles/Home.module.css';
import { dataCards } from '../src/config';
import { useRenderPropsLogosCards, useRenderPropsMainCards } from '../src/hooks';

export default memo(function Home() {
  const { data, error } = useGetSponsorImagesQuery(null)

  const [ _handleRenderLogosCarousuel, _handleRenderLogosStack ] = useRenderPropsLogosCards();

  const [ _handleMainCardsRender ] = useRenderPropsMainCards()

  const logosData  = useMemo(()=> 
    data?.data , [data?.data]
  )
    
  return (
    <div className={styles.container}>
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
      <Hero />
      <ResponsiveGalleryWithCarousel 
        data={dataCards}
        carouselRenderItems={_handleRenderLogosCarousuel}
        stackRenderItems={_handleMainCardsRender}
        stackProps={{
          height: 180,
          position: 'relative',
          top: -90,
          pl:8,
          pr: 8
        }}
      />
      <ResponsiveGalleryWithCarousel 
        data={logosData}
        carouselRenderItems={_handleRenderLogosCarousuel}
        stackRenderItems={_handleRenderLogosStack}
      />
    </div>
  );
})
