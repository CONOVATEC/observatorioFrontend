import DefaultLayout from '../src/views/DefaultLayout'
import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { organizationName } from '../src/utils/constants'

const Training = () => {
  return (
    <DefaultLayout>

      <Head>
        <title>{organizationName} - Capacitaciones</title>
      </Head>

      <HStack
        flexDir={{ base: 'column', md: 'row' }}
        px={8}
        pb={{base: 16, sm: 0}}
        minHeight='calc(100vh - var(--height-header))'
        flexGrow={1}
        gap={{ md: '3rem' }}
        justifyContent='space-evenly'
      >
        <VStack
          spacing={10}
          my={10}
          width={{md: '50%'}}
        >
          <Text
            fontWeight={'extrabold'}
            textAlign='center'
            fontSize={{ base: '2.4rem', sm: '2.7rem', md: '3.5rem', xl: '4.5rem' }}
            lineHeight={{ base: '2.5rem', md: '3.5rem', xl: '4.5rem' }}
          >
            Esta sección está en construcción
          </Text>
          <Text
            fontWeight={'semibold'}
            textAlign='center'
            fontSize={{ base: '1.2rem', sm: '1.4rem', md: '1.6rem', xl: '1.8rem' }}
          >
            Muy pronto tendrás mayor información sobre los cursos del Observatorio Joven
          </Text>
        </VStack>
        <Image
          src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/CAPACITACIONES/Imagen_Capacitaciones_exzw9t.png'
          alt='image-trainings'
          width='100%'
          maxWidth={{ base: '250', md: '300', xl: '380' }}
        />
      </HStack>

    </ DefaultLayout>
  )
}

export default Training