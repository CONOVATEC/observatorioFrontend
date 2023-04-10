import { HStack } from '@chakra-ui/react'
import { memo } from 'react'
import CaptionCarousel from '../Carousel'

interface ResponsiveGalleryProps<T> {
  data?: T[];
  carouselRenderItems(dataItem?: T, index?: number, array?: T[]): JSX.Element | null;
  stackRenderItems(dataItem?: T, index?: number, array?: T[]):JSX.Element | null;
  carouselProps?: any;
  stackProps?: any
}

function ResponsiveGallery<T>({data, carouselRenderItems, stackRenderItems, stackProps, carouselProps}: ResponsiveGalleryProps<T>){
  return (
    <>
      <CaptionCarousel carouselProps={carouselProps} cards={
        data?.map(carouselRenderItems)
      }/>
     <HStack display={{base:'none', lg:'flex'}} justifyContent='space-between' {...stackProps}>
        {
         data?.map(stackRenderItems)
        }
     </HStack>
    </>
  )
}

export default memo(ResponsiveGallery)
