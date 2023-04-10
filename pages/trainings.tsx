// import DirectiveSection from '../src/containers/DirectiveSection'
import DefaultLayout from '../src/views/DefaultLayout'
import { HStack, Image, Text, VStack } from '@chakra-ui/react'
// import BannerAboutSection from '../src/containers/BannerAboutSection'
// import GoalAboutSection from '../src/containers/GoalAboutSection'
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
        px={10}
        pb={10}
        height={{ base: 'auto', md: '86vh'}}
        gap={{ base: '0rem', md: '3rem', xl: '3rem' }}
        maxWidth='1400px'
        margin='0 auto'
        justifyContent='space-around'
        >
        <VStack spacing={10} my={10}>
          <Text
            fontWeight={'extrabold'}
            textAlign="center"
            maxWidth='700px'
            fontSize={{ base: '2.4rem', sm: '2.7rem', md: '3.5rem', xl: '4rem' }}
            lineHeight={{ base: '2.5rem', md: '3.5rem', xl: '4.5rem' }}
            >
            Esta sección está en construcción
          </Text>
          <Text
            maxWidth='700px'
            fontWeight={'semibold'}
            textAlign="center"
            fontSize={{ base: '1.2rem', sm: '1.4rem' , md: '1.6rem', xl: '2rem' }}
            >
            Muy pronto tendrás mayor información sobre los cursos del Observatorio Joven
          </Text>
        </VStack>
        <Image
          src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/CAPACITACIONES/Imagen_Capacitaciones_exzw9t.png'
          alt='image-trainings'
          width='100%'
          maxWidth={{ base: '300px', md: '300px', xl: '380px' }}
        />
      </HStack>

    </ DefaultLayout>
  )
}

export default Training