import { Image, Stack, Text, VStack } from '@chakra-ui/react'
import { directiveData } from '../../config'
import { SectionAboutCarouselProps } from '../../types'
import ResponsiveGalleryWithCarousel from '../../views/ResponsiveGalleryWithCarousel'
import { useDirectiveHandleProps } from './hooks'

const DirectiveSection = ()=>{
  const [_handleRenderCarousel] = useDirectiveHandleProps()
 
  return(
    <ResponsiveGalleryWithCarousel 
      stackRenderItems={()=>null}
      carouselProps={{
        height: { base: '50vh', md: '40vh' },
        position: 'relative',
      }}
      carouselRenderItems={_handleRenderCarousel}
      data={directiveData}/>
  )
}

export default DirectiveSection
