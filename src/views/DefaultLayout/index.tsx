import CustomNavBar from '../../containers/CustomNavBar';
import CustomFooter from '../../containers/CustomFooter';
import { memo, PropsWithChildren } from 'react';
import Head from 'next/head';


const keywords = ['Sociodemográfico',
  'Participación Ciudadana',
  'Educación',
  'Violencia de género',
  'Salud',
  'Empleabilidad',
  'Data de juventudes en el Perú',
  'Data empleabilidad joven',
  'Data de demografía juvenil',
  'Data de violencia contra la mujer joven',
  'Data de educación',
  'Data de Salud joven',
  'Data de participación Juvenil',
  'Política nacional de juventudes',
  'Estrategia metropolitana de lima',
  'Consejo Metropolitano de participación de la juventud de lima',
  'Fiscalización de políticas juveniles',
  'Población joven del Perú'
]

const DefaultLayout = ({ children }: PropsWithChildren) => {
  
  return (
    <>
      <Head>
        <title>Observatorio joven del Perú</title>
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
