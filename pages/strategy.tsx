import React from 'react'
//import Link from 'next/link'
import { Box, Link } from '@chakra-ui/react'
import {
  AspectRatio, Button,
  Center, Grid,
  GridItem, Heading,
  Image, Text,
  VStack
} from '@chakra-ui/react'
import DefaultLayout from '../src/views/DefaultLayout'
import Head from 'next/head'
import { organizationName } from '../src/utils/constants'
import { useStrategyInfo } from '../src/hooks/strategy'

const ejes = [
  [
    {
      src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Salud_m7rmd2.png',
      title: 'Salud y estilos de vida saludables'
    },
    {
      src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Emprendimiento_Innovaci%C3%B3n_y_Empleabilidad_kcxhta.png',
      title: 'Empleabilidad y emprendimiento'
    },
  ],
  [
    {
      src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_educaci%C3%B3n_n4rgea.png',
      title: 'Educación de calidad y acceso'
    },
    {
      src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Derechos_Humanos_y_Prevenci%C3%B3n_de_Violencia_uhhvfv.png',
      title: 'Cultura de paz y prevención de la violencia'
    },
  ],
  [
    {
      src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_ambiente_y_cambio_clim%C3%A1tico_kkpjhd.png',
      title: 'Ambiente y conservación'
    },
    {
      src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Participaci%C3%B3n_ciudadana_u3u9ew.png',
      title: 'Participación ciudadana, asociacionismo y gobernabilidad'
    },
  ],
  [
    {
      src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Cultura_y_recreaci%C3%B3n_vfnmdk.png',
      title: 'Creación e innovación social'
    },
    {
      src: 'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/COMISIONES/%C3%8Dcono_Participaci%C3%B3n_ciudadana_u3u9ew.png',
      title: 'Cultura e identidades'
    },
  ]
]

const Strategy = () => {
  const { name, linkYoutube, linkDrive, urlImage } = useStrategyInfo()

  return (
    <DefaultLayout>
      <Head>
        <title>{organizationName} - Estrategia metropolitana de Lima</title>
      </Head>
      <VStack as='main' maxW={1250} margin='auto' p={4} gap={8} my={8}>
        <VStack maxW={1200} gap={8}>
          <Heading textAlign='center'>{name}</Heading>
          <Center overflow='hidden' width='95vw'>
            <Image alt='portada estategia' minWidth={600} src={urlImage} />
          </Center>
          <VStack textAlign='justify' gap={4} p={4}>
            <Text>
              La Estrategia Metropolitana de Juventudes (EMJ) fue promulgada el 25 de noviembre de 2020. Es una guía de acción territorial para la implementación de servicios públicos a favor de las juventudes a nivel de Lima Metropolitana, en el marco de la Política Nacional de la Juventud.
            </Text>
            <Text>
              En su desarrollo participaron las tres instancias del Sistema Metropolitano las cuales fueron: el .Comité Metropolitano de Políticas de Juventud,  la Coordinadora Metropolitana de Programas Municipales de Juventud y el Consejo Metropolitano de Participación de la Juventud.
            </Text>
            <Text display={{ base: 'none', md: 'block' }}>
              La EMJ tiene  8 ejes estratégicos, los cuales cuentan con: indicadores,  expectativas  de futuro y servicios públicos validados. Las principales problemáticas en cada eje, fueron identificadas a partir de los encuentros interdistritales por mancomunidades  de Lima Norte, Lima Este, Lima sur y Lima Centro, en las cuales participaron las juventudes  de 15 a 29 años.
            </Text>
          </VStack>
        </VStack>
        <VStack p={4} gap={8}>
          <Heading>Ejes estratégicos</Heading>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={8}>
            {ejes.map((twoGroup, index) => <GridItem key={`grid-index-${index}`} display='flex' justifyContent='space-around' gap={8}>
              {twoGroup.map(({ src, title }, index) => <VStack
                key={`eje-index-${index}`}
                alignItems={{ base: 'center', md: 'start' }}
                width='37%'
              >
                <Image src={src}
                  alt={title}
                  boxSize={76}
                  objectFit='cover' />
                <Text textAlign={{ base: 'center', md: 'start' }}>{title}</Text>
              </VStack>)}
            </GridItem>)}
          </Grid>
        </VStack>
        <Box
          width={'100%'}>
          <AspectRatio
            minW='250px' maxH={'500px'}
            ratio={{ base: 16 / 9 }}>
            <iframe
              title='Conoce qué es la Estrategia Metropolitana de Juventudes'
              src={linkYoutube}
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        <VStack >
          <Heading
            paddingBottom={2}>
            Rendición de cuentas
          </Heading>
          <Image
            alt='rendicion de cuentas'
            src={linkDrive}
          />
        </VStack>
        <Center height={150}>
          <Link href='http://emj.gpvlima.com/' isExternal>
            <Button size='lg' variant='outline'>Más información</Button>
          </Link>
        </Center>
      </VStack>
    </DefaultLayout>
  )
}

export default Strategy