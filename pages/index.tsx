import Hero from '../src/containers/CustomHero';
import Head from 'next/head';
import CustomNavBar from '../src/containers/CustomNavBar';
import ResponsiveGalleryWithCarousel from '../src/views/ResponsiveGalleryWithCarousel';
import { useGetSponsorImagesQuery } from '../src/redux/sponsors/slice';
import { memo, useMemo } from 'react';
import styles from '../styles/Home.module.css';
import DefaultLayout from '../src/views/DefaultLayout'
import { dataCards } from '../src/config';
import { useRenderPropsLogosCards, useRenderPropsMainCards } from '../src/hooks';
import { Box, Image, Stack, Text } from '@chakra-ui/react';


type textProp = string | JSX.Element;
interface FunctionsCardProps {
  primary: textProp;
  secondary?: textProp;
  src: string
}

const FunctionsCard = ({ primary, secondary, src }: FunctionsCardProps) => (
  <Box>
    <Image alt={String(primary)} src={src} />
    <Text color={'purple.900'}>
      {primary}
    </Text>
    <Text variant='b2'>
      {secondary}
    </Text>
  </Box>
)

const functions = [
  {
    primary: 'Brindar data regional',
    secondary: 'Voluptatem harum autem doloribus rerum incidunt voluptatem officiis voluptates enim.',
    src: 'http://placeimg.com/640/480'
  },
  {
    primary: 'Brindar data regional',
    secondary: 'Voluptatem harum autem doloribus rerum incidunt voluptatem officiis voluptates enim.',
    src: 'http://placeimg.com/640/480'
  },
  {
    primary: 'Brindar data regional',
    secondary: 'Voluptatem harum autem doloribus rerum incidunt voluptatem officiis voluptates enim.',
    src: 'http://placeimg.com/640/480'
  },
]

export default memo(function Home() {
  const { data, error } = useGetSponsorImagesQuery(null)

  const logosData = useMemo(() =>
    data?.data, [data?.data]
  )

  const [_handleRenderLogosCarousuel, _handleRenderLogosStack] = useRenderPropsLogosCards();

  const [_handleMainCardsRender, _handleMainCardsCarouselRender] = useRenderPropsMainCards()

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
          carouselRenderItems={_handleMainCardsCarouselRender}
          stackRenderItems={_handleMainCardsRender}
          carouselProps={{
            height: {base: '50vh', md: '40vh'},
            top: -45,
            pl: 16,
            pr: 16
          }}
          stackProps={{
            height: 180,
            position: 'relative',
            top: -25,
            pl: 8,
            pr: 8,
            mb: 16
          }}
        />
        <ResponsiveGalleryWithCarousel
          data={logosData}
          carouselRenderItems={_handleRenderLogosCarousuel}
          stackRenderItems={_handleRenderLogosStack}
        />
        <Stack flexDir={{ base: 'column', md: 'row' }}>
          {
            functions
              .map((functionData, index) => (<FunctionsCard key={`function-${index}`} {...functionData} />))
          }
        </Stack>
      </DefaultLayout>
    </div>
  );
})
