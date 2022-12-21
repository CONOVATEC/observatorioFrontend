import DirectiveSection from '../src/containers/DirectiveSection'
import DefaultLayout from '../src/views/DefaultLayout'
import { Image, Text, VStack } from '@chakra-ui/react'
import BannerAboutSection from '../src/containers/BannerAboutSection'
import GoalAboutSection from '../src/containers/GoalAboutSection'

const Training = () => {
  return (
    <DefaultLayout>
            
      <VStack spacing={4} my={10}
        width={{ base: 'full', md: '60%' }}
        height={{ base: '30vh', md: '50vh', sm: '40vh' }}>
        
        <Text fontWeight={'extrabold'} fontSize={'4xl'}>
          Esta sección está en construcción
        </Text>
        <Text fontWeight={'semibold'} fontSize={'2xl'}>
          Muy pronto tendrás mayor información sobre los cursos del Observatorio Joven
        </Text>
        
      </VStack>
      <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/CAPACITACIONES/Imagen_Capacitaciones_exzw9t.png'
        alt='image-trainings' boxSize='50%' width={{ base: 'full', md: '50%' }} height={{ base: 'full', md: '50%', sm: '40vh' }}
        objectFit='cover' />
      
    </ DefaultLayout>
  )
}

export default Training