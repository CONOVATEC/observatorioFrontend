import Head from 'next/head';
import CustomHero from '../src/containers/CustomHero';
import NewsSection from '../src/containers/NewsSection';
import DefaultLayout from '../src/views/DefaultLayout';
import { organizationName } from '../src/utils/constants';
import { Box } from '@chakra-ui/react';

export default function Listing() {

  return (
    <DefaultLayout>
      <Head>
        <title>{organizationName} - Boletín de noticias</title>
      </Head>
      <CustomHero />
      <Box mb="10" width="100%" >
      <NewsSection />
      </Box>
    </DefaultLayout>
  )
}
