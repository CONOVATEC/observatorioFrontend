import DirectiveSection from '../src/containers/DirectiveSection'
import DefaultLayout from '../src/views/DefaultLayout'
import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import BannerAboutSection from '../src/containers/BannerAboutSection'
import GoalAboutSection from '../src/containers/GoalAboutSection'
import Head from 'next/head'


const Training = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Observatorio joven del Perú - Capacitaciones</title>
      </Head>
      <HStack flexDir={{ base: 'column', md: 'row' }}>
        <VStack spacing={4} my={10}>
          <Text fontWeight={'extrabold'} fontSize={'4xl'}>
            Esta sección está en construcción
          </Text>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            Muy pronto tendrás mayor información sobre los cursos del Observatorio Joven
          </Text>
        </VStack>
        <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/CAPACITACIONES/Imagen_Capacitaciones_exzw9t.png'
          alt='image-trainings' boxSize='50%'
          objectFit='cover' />
      </HStack>
    </ DefaultLayout>
  )
}

export default Training