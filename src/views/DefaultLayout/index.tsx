import CustomNavBar from '../../containers/CustomNavBar';
import CustomFooter from '../../containers/CustomFooter';
import { memo, PropsWithChildren } from 'react';
import Head from 'next/head';
import { descriptionOrganization, organizationName } from '../../utils/constants';


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
  'Estrategia metropolitana de Lima',
  'Consejo Metropolitano de participación de la juventud de Lima',
  'Fiscalización de políticas juveniles',
  'Población joven del Perú',
]

const DefaultLayout = ({ children }: PropsWithChildren) => {

  return (
    <>
      <Head>
        <title>{organizationName}</title>
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
        <meta name="description" content={descriptionOrganization} />
        <meta name="keywords" content={String(keywords)} />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
        <link rel="manifest" href="./site.webmanifest"/>
      </Head>
      <CustomNavBar />
      {children}
      <CustomFooter />
    </>
  )
}

export default memo(DefaultLayout)
