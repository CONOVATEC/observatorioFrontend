import { AspectRatio, Box, Button, CircularProgress, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { nationalData } from '../../config'
import { useNationalHandleProps } from './hooks'
import CaptionCarousel from '../../views/Carousel'
import { Link } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useGetNationalApiQuery } from '../../redux/national/slice'

function TimelineSection() {
  const { data, isLoading } = useGetNationalApiQuery(null)
  const nationalInfo = useMemo(() => {
    const [firstItem] = [data?.data]
    return firstItem
  }, [data])

  const [firstValue] = nationalInfo ?? []
  console.log('🚀 ~ file: index.tsx:17 ~ TimelineSection ~ firstValue', firstValue)

  const [_handleRenderCarousel] = useNationalHandleProps()

  return (
    <Box>
      {isLoading ? <CircularProgress /> :
        <>
          <VStack spacing={4} my={10}>
            <Text fontWeight={'bold'} fontSize={'2xl'}>{firstValue.name}</Text>
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
              {firstValue.description}
            </Text>
            <Link href={firstValue.link_drive} isExternal>
              <Button borderRadius={0} colorScheme='blue' variant='outline' >
                Descargar Política
              </Button>
            </Link>
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
            <Box
              width={'100%'}>
              <AspectRatio
                minW='250px' maxH={'500px'}
                ratio={{ base: 16 / 9 }}>
                <iframe
                  title='Los Jóvenes con la Política Nacional de Juventud'
                  src={firstValue.link_video}
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
            <Image src={firstValue.url_image} alt={'politica nacional detalle'} />
            <Link href='https://juventud.gob.pe/' isExternal>
              <Button borderRadius={0} colorScheme='blue' variant='outline'>
                Más Información
              </Button>
            </Link>
          </VStack>
        </>
      }
    </Box>
  )
}

export default TimelineSection