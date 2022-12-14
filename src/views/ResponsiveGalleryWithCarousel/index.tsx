import { Box, HStack } from '@chakra-ui/react'
import { memo } from 'react'
import { ILogoData } from '../../types'
import CaptionCarousel from '../Carousel'

type RenderPropGallery = (dataItem: ILogoData, index: number, array: ILogoData[]) => JSX.Element

interface ResponsiveGalleryProps {
  data?: ILogoData[];
  carouselRenderItems: RenderPropGallery
  stackRenderItems: RenderPropGallery
}

const ResponsiveGallery = ({ data, carouselRenderItems, stackRenderItems }: ResponsiveGalleryProps) =>{
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
