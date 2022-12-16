import { HStack } from '@chakra-ui/react'
import { memo } from 'react'
import CaptionCarousel from '../Carousel'

// type RenderPropGallery<T> = 

interface ResponsiveGalleryProps<T> {
  data?: T[];
  carouselRenderItems: (dataItem?: T, index?: number, array?: T[]) => JSX.Element;
  stackRenderItems: (dataItem?: T, index?: number, array?: T[]) => JSX.Element;
}

function ResponsiveGallery<T>({data, carouselRenderItems, stackRenderItems}: ResponsiveGalleryProps<T>){
  return (
    <>
      <CaptionCarousel cards={
        data?.map(carouselRenderItems)
      }/>
     <HStack display={{base:'none', lg:'flex'}} justifyContent="space-between">
        {
         data?.map(stackRenderItems)
        }
     </HStack>
    </>
  )
}

export default memo(ResponsiveGallery)
