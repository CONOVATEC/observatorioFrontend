import Head from 'next/head';
import CustomHero from '../src/containers/CustomHero';
import NewsSection from '../src/containers/NewsSection';
import DefaultLayout from '../src/views/DefaultLayout';

export default function Listing() {

  return (
  <DefaultLayout>
      <Head>
        <title>Observatorio de joven del Perú - Boletín de noticias</title>
      </Head>
      <CustomHero />
      <NewsSection/>
    </DefaultLayout>
  )
}
