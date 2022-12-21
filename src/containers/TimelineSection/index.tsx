import { Button, Image, Text, VStack } from '@chakra-ui/react'
import ResponsiveGalleryWithCarousel from '../../views/ResponsiveGalleryWithCarousel'
import { nationalData } from '../../config'
import { useNationalHandleProps } from './hooks'
import CaptionCarousel from '../../views/Carousel'

function TimelineSection() {
  const [_handleRenderCarousel] = useNationalHandleProps()

  return (
    <>
      <VStack spacing={4} my={10}>
        <Text fontWeight={'bold'} fontSize={'2xl'}>Política nacional de juventud</Text>
        <Text fontSize={'2xl'} textColor={'purple.500'}>
          Linea de tiempo
        </Text>
      </VStack>
      <CaptionCarousel cards={nationalData.map(_handleRenderCarousel)} carouselProps={
        {
          display: 'block',
          height: { base: '82vh', sm: '85vh', md: '50vh', lg: '60vh' },
          pl: '8%',
          pr: '8%',
        }
      } />
      <VStack
        spacing={4}
        mt={{ base: '0%', lg: '5%' }}
        mx={8}
        alignItems={'start'}>
        <Text fontWeight={'bold'} fontSize={'3xl'}>
          ¿Qués es la política nacional de juventud?
        </Text>
        <Text paddingBottom={5} fontSize={'xl'}>
          Es la respuesta del estado que orienta las acciones e intervenciones públicas en materia de juventud a fin de promover el desarrollo integral para la efectiva participación de los jóvenes en la sociedad.
        </Text>
        <Button borderRadius={0} colorScheme='blue' variant='outline'>
          Descargar Política
        </Button>
      </VStack>
      <VStack
        spacing={10}
        my={10}
        mx={8}
        justifyContent={'center'}>
        <Text fontWeight={'bold'} fontSize={{ base: '2xl', md: '3xl' }}>
          OBJETIVOS
        </Text>
        <Image src={'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075067/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/POL%C3%8DTICA%20NACIONAL%20DE%20LA%20JUVENTUD/Infograf%C3%ADa_con_iconos_de_los_objetivos_de_la_pol%C3%ADtica-01_nqsdpr.jpg'} alt={'infografia politica nacional'} />
        <Image src={'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075067/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/POL%C3%8DTICA%20NACIONAL%20DE%20LA%20JUVENTUD/IAMGEN_DE_POLITICA-03_1_gjqd17.png'} alt={'politica nacional detalle'} />
        <Button borderRadius={0} colorScheme='blue' variant='outline'>
          Más Información
        </Button>
      </VStack>
    </>
  )
}

export default TimelineSection