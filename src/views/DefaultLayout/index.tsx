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
        <meta name="description" content="Somos un proyecto del Consejo Metropolitano Participación de la Juventud de Lima, que busca proporcionar datos actualizados sobre las condiciones sociodemográficas, socioeconómicas y realizar una vigilancia a la implementación de las políticas públicas en materia de juventud en el Perú." />
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
