import Hero from '../src/containers/CustomHero';
import Head from 'next/head';
import CustomNavBar from '../src/containers/CustomNavBar';
import ResponsiveGalleryWithCarousel from '../src/views/ResponsiveGalleryWithCarousel';
import { useGetSponsorImagesQuery } from '../src/redux/sponsors/slice';
import { memo, useCallback, useMemo } from 'react';
import { ILogoData } from '../src/types';

import styles from '../styles/Home.module.css';
import { Box } from '@chakra-ui/react';
import DefaultLayout from '../src/views/DefaultLayout'

export default memo(function Home() {
  const { data, error } = useGetSponsorImagesQuery(null)

  const logosData: ILogoData[] | undefined  = useMemo<ILogoData[] | undefined>(()=> 
    data?.data , [data?.data]
  )

  const _handleCarouselRender = useCallback(({url_image, name } : ILogoData, index: number) =>
    <Box
      aria-label={name}
      key={`carousel-image-${index}`}
      height={{base:'50vh', md:'1xl'}}
      backgroundSize='50%'
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundImage={`url(${url_image})`}/>
   , [])

  const _handleStackRender = useCallback(({ url_image }: ILogoData, index: number, array:ILogoData[]) => 
    <Box
      key={`sponsor-${index}`}
      width={`calc(96%/${array.length})`}
      height='50vh'
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize='contain'
      backgroundImage={`url(${url_image})`}/ >
    , [])
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Observatorio</title>
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>

        <Hero />
        <ResponsiveGalleryWithCarousel 
            data={logosData}
            carouselRenderItems={_handleCarouselRender}
            stackRenderItems={_handleStackRender}
          />
      </DefaultLayout>
    </div>
  );
})
