import CustomNavBar from '../../containers/CustomNavBar';
import CustomFooter from '../../containers/CustomFooter';
import { memo, PropsWithChildren } from 'react';
import Head from 'next/head';


const keywords = ['Sociodemográfico',
  'Participación Ciudadana',
  'Educación',
  'Violencia de género',
  'Salud',
  'Empleabilidad'
]

const DefaultLayout = ({ children }: PropsWithChildren) => {
  
  return (
    <>
      <Head>
        <title>Observatorio de joven del Perú</title>
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
        <meta name="description" content="El Observatorio Joven es una plataforma virtual que nos permita recoger información sobre la realidad de las juventudes del Perú en diferentes temáticas y contextos de desarrollo, así como realizar un seguimiento a las políticas públicas en materia de juventud en el Perú." />
        <meta name="keywords" content={String(keywords)}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavBar />
        {children}
      <CustomFooter />
    </>
  )
}

export default memo(DefaultLayout)
