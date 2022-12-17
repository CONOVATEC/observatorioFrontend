import { directiveData } from '../../config'
import ResponsiveGalleryWithCarousel from '../../views/ResponsiveGalleryWithCarousel'
import { useDirectiveHandleProps } from './hooks'

const DirectiveSection = ()=>{
  const [_handleRenderCarousel] = useDirectiveHandleProps()
 
  return(
    <ResponsiveGalleryWithCarousel
      // TODO: crearte render propsd for desktopView 
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
