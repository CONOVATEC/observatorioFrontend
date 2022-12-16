import Hero from '../src/containers/CustomHero';
import Head from 'next/head';
import ResponsiveGalleryWithCarousel from '../src/views/ResponsiveGalleryWithCarousel';
import { useGetSponsorImagesQuery } from '../src/redux/sponsors/slice';
import { memo, useMemo } from 'react';
import styles from '../styles/Home.module.css';
import DefaultLayout from '../src/views/DefaultLayout'
import { dataCards, functions, POWER_BI_LINK, tematics, tematicsByTwo } from '../src/config';
import { useRenderPropsLogosCards, useRenderPropsMainCards } from '../src/hooks';
import { AspectRatio, Box, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import FunctionsCard from '../src/components/FunctionCard';


const TematicCard = ()=>{
   return(
     <Box>
       
     </Box>
   )
}

export default memo(function Home() {
  const { data, error } = useGetSponsorImagesQuery(null)

  const logosData = useMemo(() =>
    data?.data, [data?.data]
  )

  const [_handleRenderLogosCarousuel, _handleRenderLogosStack] = useRenderPropsLogosCards();

  const [_handleMainCardsRender] = useRenderPropsMainCards()

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
      <DefaultLayout>
        <Hero />
        <ResponsiveGalleryWithCarousel
          data={dataCards}
          carouselRenderItems={_handleRenderLogosCarousuel}
          stackRenderItems={_handleMainCardsRender}
          stackProps={{
            height: 180,
            position: 'relative',
            top: -90,
            pl: 8,
            pr: 8
          }}
        />
        <ResponsiveGalleryWithCarousel
          stackProps={{px: 8}}
          data={logosData}
          carouselRenderItems={_handleRenderLogosCarousuel}
          stackRenderItems={_handleRenderLogosStack}
        />
        
        <Heading textAlign='center'>Nuestras</Heading>
        <Heading textAlign='center'>Funciones</Heading>
        <Stack 
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={{base: 'center', md: 'space-between'}}
          alignItems="center" 
          gap={8}
          px={8}
        >
          {
            functions
              .map((functionData, index) => (<FunctionsCard key={`function-${index}`} {...functionData} />))
          }
        </Stack>
        
        <Heading textAlign='center'>Nuestras</Heading>
        <Heading textAlign='center'>Temáticas</Heading>
        <Stack 
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={{base: 'center', md: 'space-between'}}
          alignItems='center'
          gap={8}
          px={8}
        >
          {
            tematicsByTwo
              .map((tematicsByTwo, index)=>{
                const [firstItem, secondItem] = tematicsByTwo;
                return(
                  <HStack key={index} width='100%' justifyContent={{base: 'space-evenly', md:'space-around'}} >
                    <VStack>
                      <Image boxSize='75'alt={firstItem.title} src={firstItem.src}/>
                      <Heading as='h5' size='sm'>{firstItem.title}</Heading >
                    </VStack>
                    <VStack>
                      <Image boxSize='75' alt={secondItem.title} src={secondItem.src}/>
                      <Heading as='h5' size='sm'>{secondItem.title}</Heading >
                    </VStack>
                  </HStack>
                )
              })
          }
        </Stack>
        <Stack padding="2rem" gap={8}>
          <Heading textAlign="center" as="h2">Situación de la población joven en el Perú</Heading>
          <AspectRatio ratio={16 / 7}>
            <iframe
              title="Report Section"
              allowFullScreen
              src={POWER_BI_LINK} >
            </iframe>
          </AspectRatio>
        </Stack>
      </DefaultLayout>
    </div>
  );
})
