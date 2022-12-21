import { Text, VStack } from '@chakra-ui/react'
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
          height: '60vh',
          pl: '8%',
          pr: '8%',
        }
      } />

    </>
  )
}

export default TimelineSection